// import { Modal, Text, Button } from '@mantine/core'
// import React, { Component } from 'react'
// import { useDeleteProductLazyQuery } from "../../gql/graphql";

// export default class DeleteProduct extends Component {
//     const [deleteProduct, { loading, error }] = useDeleteProductLazyQuery();
//   const [opened, setOpened] = useState(false);
//   const [productToDelete, setProductToDelete] = useState<number | null>(null);

//   const handleDeleteClick = (e: React.MouseEvent, productId: number) => {
//     e.stopPropagation(); // Prevents the link from being triggered
//     setProductToDelete(productId); // Set the product ID for deletion
//     setOpened(true); // Open the confirmation modal
//   };
//   const confirmDelete = async () => {
//       if (productToDelete !== null) {
//         await deleteProduct({ variables: { productId: productToDelete } });
//         setOpened(false); // Close modal after delete
//       }
//     };
//     return (
//       <div>
//         {/* Modal for Delete Confirmation */}
//       <Modal
//         opened={opened}
//         onClose={() => setOpened(false)}
//         title="Confirm Delete"
//       >
//         <Text>Are you sure you want to delete this product?</Text>
//         <Button color="red" onClick={confirmDelete} loading={loading}>
//           Confirm Delete
//         </Button>
//         <Button onClick={() => setOpened(false)}>Cancel</Button>
//       </Modal>

//       {/* Optional error handling */}
//       {error && (
//         <Text color="red">Error deleting product: {error.message}</Text>
//       )}
//       </div>
//     )
// }
