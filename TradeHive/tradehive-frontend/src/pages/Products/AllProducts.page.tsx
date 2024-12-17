import React from 'react';
import { useGetAllQuery } from '../../gql/graphql.ts';
import ProductList from '../../components/Products/ProductList.tsx';

function isProduct(product: { __typename?: "ProductListResponse"; title: string; description: string; price: number; rentPrice: number; rentType?: string | null; categories: string[]; createdAt: string } | null): product is { __typename?: "ProductListResponse"; title: string; description: string; price: number; rentPrice: number; rentType?: string | null; categories: string[]; createdAt: string } {
  return product !== null;
}

const ProductsPage: React.FC = () => {
  const { data, loading, error } = useGetAllQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Filter out null or undefined values from the getAllProducts array
  const products = data?.getAllProducts?.filter(isProduct) ?? [];  // Safely handles null or undefined

  return (
    <div style={{marginBottom: 20}}>
      <h1>Products</h1>
      {data && data.getAllProducts ? (
        <ProductList products={products}/>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductsPage;
