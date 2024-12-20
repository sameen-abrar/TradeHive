import { useParams } from "react-router-dom"; // to get the productId from the URL
import {
  Loader,
  Text,
  Container,
  Badge,
  Paper,
  Button,
  Modal,
} from "@mantine/core"; // Mantine components for UI
import { useGetProductByIdQuery } from "../../gql/graphql";
import { useState } from "react";
import { DatePickerInput } from "@mantine/dates";

const ProductDetailsPage = () => {
  // Get productId from URL parameters
  const { id } = useParams();
  console.log("product id: ", id);

  // State for modal visibility
  const [buyModalOpened, setBuyModalOpened] = useState(false);
  const [rentModalOpened, setRentModalOpened] = useState(false);
  const [rentStartDate, setRentStartDate] = useState<Date | null>(null);
  const [rentEndDate, setRentEndDate] = useState<Date | null>(null);

  // Handlers for modals
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

  const handleBuyConfirm = () => {
    // Add buy logic here
    console.log("Product bought:", getProduct?.title);
    closeBuyModal();
  };

  const handleRentConfirm = () => {
    if (!rentStartDate || !rentEndDate) {
      alert("Please select both start and end dates.");
      return;
    }

    // Add rent logic here
    console.log(
      "Product rented:",
      getProduct?.title,
      "from",
      rentStartDate,
      "to",
      rentEndDate
    );
    closeRentModal();
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
            <Button onClick={handleBuyConfirm}>Yes, Buy</Button>
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
              label="Start Date"
              value={rentStartDate}
              onChange={setRentStartDate}
            />
            <DatePickerInput
              label="End Date"
              value={rentEndDate}
              onChange={setRentEndDate}
              style={{ marginTop: "10px" }}
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
            <Button onClick={handleRentConfirm}>Confirm Rent</Button>
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
