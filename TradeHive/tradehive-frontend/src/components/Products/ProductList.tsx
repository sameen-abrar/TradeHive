// import React from "react";
// import { ProductListResponse } from "../../gql/graphql";
// import { ActionIcon, Badge, Box, Card, Container, Text } from "@mantine/core";
// import "./ProductList.css";
// import { Link } from "react-router-dom";
// import { IconTrash } from "@tabler/icons-react";

// interface ProductListProps {
//   products: Array<ProductListResponse>;
// }

// const ProductList: React.FC<ProductListProps> = ({ products }) => {
//   const onDelete = (id: number) => {
//     console.log(id);
//   };

//   const handleDeleteClick = (e: React.MouseEvent) => {
//     e.stopPropagation(); // Prevents the link from being triggered
//     onDelete(product.id); // Calls the onDelete function passed as prop
//   };

//   return (
//     <Box className="Box">
//       {products.map((product, index) => {
//         return (
//           <Container key={index} fluid>
//             <Link to={`/product/${product.id}`}>
//               <Card key={index} shadow="sm" padding="lg" className="Items">
//                 {/* Delete icon */}
//                 <ActionIcon
//                   variant="light"
//                   color="red"
//                   onClick={handleDeleteClick}
//                   title="Delete Product"
//                 >
//                   <IconTrash />
//                 </ActionIcon>

//                 <Text fw={500}>{product.title}</Text>
//                 <div>
//                   {product.categories.map((category, idx) => (
//                     <Badge key={idx} color="blue" style={{ marginTop: 10 }}>
//                       {category}
//                     </Badge>
//                   ))}
//                 </div>
//                 <Text size="sm">Price: ${product.price}</Text>
//                 <Text size="sm">{product.description}</Text>
//                 <Text size="sm">Date published: {product.createdAt}</Text>
//               </Card>
//             </Link>
//           </Container>
//         );
//       })}
//     </Box>
//   );
// };

// export default ProductList;
import React, { useState } from "react";
import { ProductListResponse } from "../../gql/graphql";
import { ActionIcon, Badge, Box, Card, Container, Text, Modal, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconTrash } from "@tabler/icons-react";
import { useDeleteProductLazyQuery } from "../../gql/graphql"; // Adjust the import path based on your project structure

interface ProductListProps {
  products: Array<ProductListResponse>;
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [deleteProduct, { loading, error }] = useDeleteProductLazyQuery();
  const [opened, setOpened] = useState(false);
  const [productToDelete, setProductToDelete] = useState<number | null>(null);

  const handleDeleteClick = (e: React.MouseEvent, productId: number) => {
    e.stopPropagation(); // Prevents the link from being triggered
    setProductToDelete(productId); // Set the product ID for deletion
    setOpened(true); // Open the confirmation modal
  };

  const confirmDelete = async () => {
    if (productToDelete !== null) {
      await deleteProduct({ variables: { productId: productToDelete } });
      setOpened(false); // Close modal after delete
    }
  };

  return (
    <Box className="Box">
      {products.map((product, index) => {
        return (
          <Container key={index} fluid>
            <Link to={`/product/${product.id}`}>
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
              </Card>
            </Link>
          </Container>
        );
      })}

      {/* Modal for Delete Confirmation */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Confirm Delete"
      >
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
