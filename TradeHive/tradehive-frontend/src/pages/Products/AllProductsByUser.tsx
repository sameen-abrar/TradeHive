import React from "react";
import {
  ProductListResponse,
  useGetAllByUserQuery,
} from "../../gql/graphql.ts";
import ProductList from "../../components/Products/ProductList.tsx";
import { Link } from "react-router-dom";
import { ActionIcon, Text } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

const AllProductsByUser: React.FC = () => {
  const id = localStorage.getItem("userId")

  if (!id) {
    return <Text>Error: User ID is missing in the URL.</Text>;
  }
  const { data, loading, error } = useGetAllByUserQuery({
    variables: { userId: parseInt(id, 10) },
    fetchPolicy: "network-only",
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // // Filter out null or undefined values from the getAllProducts array
  // const products = data?.getAllProducts?.filter(isProduct) ?? [];  // Safely handles null or undefined
  // Assuming this is where you're processing the data
  const products =
    data?.getProductsByUserId?.filter(
      (product): product is ProductListResponse => product !== null
    ) ?? [];

  console.log(products);
  return (
    <div style={{ marginBottom: 20 }}>
      <h1>Products</h1>
      {/* Delete icon */}
      <Link to="/products/add">
        <ActionIcon variant="light" color="red" title="Delete Product">
          <IconPlus />
        </ActionIcon>
        Add product
      </Link>
      {data && data.getProductsByUserId ? (
        <ProductList products={products} />
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default AllProductsByUser;
