import React from 'react';

interface Product {
  title: string;
  description: string;
  price: number;
  rentPrice: number;
  rentType: string;
  categories: string[];
  createdAt: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <h3>{index + 1}. {product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Rent Price: ${product.rentPrice} ({product.rentType})</p>
            <p>Categories: {product.categories.join(', ')}</p>
            <p>Created At: {new Date(parseInt(product.createdAt)).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
