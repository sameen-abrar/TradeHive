import React, { useState } from "react";
import { ProductListResponse, useDeleteProductLazyQuery } from "../../gql/graphql";
import {
  ActionIcon,
  Badge,
  Box,
  Card,
  Container,
  Text,
  Modal,
  Button,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { IconTrash } from "@tabler/icons-react";
import "./ProductList.css";

// Define props interface
interface ProductListProps {
  products: Array<ProductListResponse>;
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [deleteProduct, { loading, error }] = useDeleteProductLazyQuery();
  const [opened, setOpened] = useState(false);
  const [productToDelete, setProductToDelete] = useState<number | null>(null);

  console.log(products)

  // Handle delete icon click
  const handleDeleteClick = (e: React.MouseEvent, productId: number) => {
    e.stopPropagation(); 
    console.log("to delete: ", productId)
    setProductToDelete(productId); 
    setOpened(true); 
  };

  // Confirm delete action
  const confirmDelete = async () => {
    if (productToDelete !== null) {
      try {
        await deleteProduct({ variables: { productId: productToDelete } });
        setOpened(false); // Close modal after delete
        // Optionally, refresh or update the product list here
        window.location.reload()
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  return (
    <Box className="Box">
      {products.map((product, index) => (
        <Container key={index} fluid>
          <Card shadow="sm" padding="lg" className="Items">
            {/* Delete icon */}
            <ActionIcon
              variant="light"
              color="red"
              onClick={(e) => handleDeleteClick(e, product.id)}
              title="Delete Product"
            >
              <IconTrash />
            </ActionIcon>

            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
              <Text fw={500}>{product.title}</Text>
              <div>
                {product.categories.map((category, idx) => (
                  <Badge key={idx} color="blue" style={{ marginTop: 10 }}>
                    {category}
                  </Badge>
                ))}
              </div>
              <Text size="sm">Price: ${product.price}</Text>
              <Text size="sm">{product.description}</Text>
              <Text size="sm">Date published: {product.createdAt}</Text>
            </Link>
          </Card>
        </Container>
      ))}

      {/* Modal for Delete Confirmation */}
      <Modal opened={opened} onClose={() => setOpened(false)} title="Confirm Delete" centered>
        <Text>Are you sure you want to delete this product?</Text>
        <Button color="red" onClick={confirmDelete} loading={loading}>
          Confirm Delete
        </Button>
        <Button onClick={() => setOpened(false)}>Cancel</Button>
      </Modal>

      {/* Optional error handling */}
      {error && <Text color="red">Error deleting product: {error.message}</Text>}
    </Box>
  );
};

export default ProductList;
