import { useNavigate, useParams } from "react-router-dom"; // to get the productId from the URL
import {
  Loader,
  Text,
  Container,
  Badge,
  Paper,
  Button,
  Modal,
  Notification,
} from "@mantine/core"; // Mantine components for UI
import "@mantine/dates/styles.css";
import {
  useBuyMutation,
  useGetProductByIdQuery,
  useRentMutation,
} from "../../gql/graphql";
import { useState } from "react";
import { DatePickerInput } from "@mantine/dates";

const ProductDetailsPage = () => {
  const navigate = useNavigate();
  // Get productId from URL parameters
  const { id } = useParams();

  // Retrieve userId from local storage
  const userId = localStorage.getItem("userId");
  if (!userId) {
    return <Text>Error: User ID not found in local storage</Text>;
  }

  // API configurations
  const [buyProductMutation, { loading: buyLoading }] = useBuyMutation();
  const [rentProductMutation, { loading: rentLoading }] = useRentMutation();

  // State for modal visibility and date selection
  const [buyModalOpened, setBuyModalOpened] = useState(false);
  const [rentModalOpened, setRentModalOpened] = useState(false);
  const [rentStartDate, setRentStartDate] = useState<Date | null>(null);
  const [rentEndDate, setRentEndDate] = useState<Date | null>(null);

  // Handlers for modal visibility
  const openBuyModal = () => setBuyModalOpened(true);
  const closeBuyModal = () => setBuyModalOpened(false);

  const openRentModal = () => setRentModalOpened(true);
  const closeRentModal = () => setRentModalOpened(false);

  // Ensure the id is available before making the query
  if (!id) {
    return <Text>Error: Product ID is missing</Text>;
  }

  const { loading, error, data } = useGetProductByIdQuery({
    variables: { productId: parseInt(id, 10) },
  });

  if (loading) return <Loader />;
  if (error) return <Text>Error fetching product</Text>;

  const getProduct = data?.getProduct;

  // Buy product logic
  const handleBuyConfirm = async () => {
    try {
      await buyProductMutation({
        variables: {
          userId: parseInt(userId),
          productId: parseInt(id, 10),
        },
      });
      
      closeBuyModal();      
      navigate(`/products/${userId}`)
      return(
      <Notification title="Success" color="green">
        Product bought successfully!
      </Notification>)
    } catch (err) {
      return(
      <Notification title="Error" color="red">
        Failed to buy the product.
      </Notification>)
    }
  };

  // Rent product logic
  const handleRentConfirm = async () => {
    if (!rentStartDate || !rentEndDate) {
      <Notification title="Error" color="red">
        Please select both start and end dates.
      </Notification>;

      return;
    }
    if (rentEndDate <= rentStartDate) {
      return(
      <Notification title="Error" color="red">
        End date must be after the start date.
      </Notification>)
    }
    if (rentStartDate <= new Date()) {
      return (<Notification title="Error" color="red">
        Start date must not be in the past.
      </Notification>);
    }

    try {
      await rentProductMutation({
        variables: {
          userId: parseInt(userId),
          productId: parseInt(id, 10),
          fromDate: rentStartDate.toISOString(),
          toDate: rentEndDate.toISOString(),
        },
      });    
          
      closeRentModal();
      
      navigate(`/products/${userId}`)
      return (<Notification title="Success" color="green">
        Product rented successfully!
      </Notification>);
    } catch (err) {
      return (<Notification title="Error" color="red">
        Failed to rent the product.
      </Notification>);
    }
  };

  return (
    <Container>
      <Paper p="xl" withBorder>
        <h1>{getProduct?.title}</h1>
        <p>{getProduct?.description}</p>
        <Text size="lg">
          Price: ${getProduct?.price}
          {getProduct?.rentPrice &&
            ` (Rent: ${getProduct?.rentPrice} ${getProduct?.rentType})`}
        </Text>
        <div>
          <p>Categories:</p>
          {getProduct?.categories?.map((category, idx) => (
            <Badge key={idx} color="blue" style={{ margin: "5px" }}>
              {category}
            </Badge>
          ))}
        </div>
        <Text size="sm">
          Created at: {new Date(getProduct?.createdAt).toLocaleDateString()}
        </Text>

        {/* Buy Modal */}
        <Modal
          opened={buyModalOpened}
          onClose={closeBuyModal}
          title="Do you want to buy?"
          centered
        >
          <Text>Are you sure you want to buy this product?</Text>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <Button variant="default" onClick={closeBuyModal}>
              No, Cancel
            </Button>
            <Button onClick={handleBuyConfirm} loading={buyLoading}>
              Yes, Buy
            </Button>
          </div>
        </Modal>

        {/* Rent Modal */}
        <Modal
          opened={rentModalOpened}
          onClose={closeRentModal}
          title="Rent this product"
          centered
        >
          <Text>Please select the rental period:</Text>
          <div style={{ marginTop: "20px" }}>
            <DatePickerInput
              label="Start date"              
              placeholder="Start date"
              value={rentStartDate}
              onChange={setRentStartDate}
              minDate={new Date()}
            />
            <DatePickerInput
              label="End date"
              placeholder="End date"
              value={rentEndDate}
              onChange={setRentEndDate}
              style={{ marginTop: "10px" }}
              minDate={rentStartDate ?? new Date()}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <Button variant="default" onClick={closeRentModal}>
              Cancel
            </Button>
            <Button onClick={handleRentConfirm} loading={rentLoading}>
              Confirm Rent
            </Button>
          </div>
        </Modal>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "200px",
          }}
        >
          <Button variant="default" onClick={openBuyModal}>
            Buy
          </Button>
          <Button onClick={openRentModal}>Rent</Button>
        </div>
      </Paper>
    </Container>
  );
};

export default ProductDetailsPage;
