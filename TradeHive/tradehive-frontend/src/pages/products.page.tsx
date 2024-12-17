import React from 'react';
import { useGetAllQuery } from '../gql/graphql.ts';
import ProductList from '../components/Products/ProductList';

const ProductsPage: React.FC = () => {
  const { data, loading, error } = useGetAllQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Products</h1>
      {data && data.getAllProducts ? (
        <ProductList products={data.getAllProducts} />
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductsPage;
