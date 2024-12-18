import React from "react";
import { ProductListResponse, useGetAllQuery } from "../../gql/graphql.ts";
import ProductList from "../../components/Products/ProductList.tsx";


const ProductsPage: React.FC = () => {
  const { data, loading, error } = useGetAllQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // // Filter out null or undefined values from the getAllProducts array
  // const products = data?.getAllProducts?.filter(isProduct) ?? [];  // Safely handles null or undefined
  // Assuming this is where you're processing the data
  const products =
    data?.getAllProducts?.filter(
      (product): product is ProductListResponse => product !== null
    ) ?? [];

  console.log(products);
  return (
    <div style={{ marginBottom: 20 }}>
      <h1>Products</h1>
      {data && data.getAllProducts ? (
        <ProductList products={products} />
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductsPage;
