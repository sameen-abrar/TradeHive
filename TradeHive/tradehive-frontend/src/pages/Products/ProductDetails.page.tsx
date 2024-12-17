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
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

const ProductDetailsPage = () => {
  // State to control modal visibility
  const [opened, setOpened] = useState(false);

  // Function to open the modal
  const open = () => setOpened(true);

  // Function to close the modal
  const close = () => setOpened(false);
  // Get productId from URL parameters
  const { id } = useParams<{ id: string }>();
  // Ensure the id is available before making the query
  if (!id) {
    return <Text>Error: Product ID is missing</Text>; // Or redirect if id is required
  }
  // Use Apollo's useQuery hook to fetch the product data
  const { loading, error, data } = useGetProductByIdQuery({
    variables: { productId: parseInt(id, 10) }, // Pass the productId as a variable
  });
  if (loading) return <Loader />;
  if (error) return <Text>Error fetching product</Text>;

  const getProduct = data?.getProduct;

  //   const { getProduct } = data;

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
        {/* Modal Component */}
        <Modal opened={opened} onClose={close} title="Do you want to buy?" centered>
          <Text>Are you sure you want to buy this product?</Text>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <Button variant="default" onClick={close}>
              No, Cancel
            </Button>
            <Button onClick={() => { 
              // Handle buying logic here
              close();
            }}>
              Yes, Buy
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
          <Button variant="default" onClick={open}>
            Buy
          </Button>
          <Button>Sell</Button>
        </div>
      </Paper>
    </Container>
  );
};

export default ProductDetailsPage;
