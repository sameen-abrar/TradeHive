import React from "react";
import { ProductListResponse } from "../../gql/graphql";
import { Badge, Box, Card, Container, Text } from "@mantine/core";
import "./ProductList.css";
import { Link } from "react-router-dom";

interface ProductListProps {
  products: Array<ProductListResponse>;
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Box className="Box">
      {products.map((product, index) => {
        return (
          <Container key={index} fluid>
            <Link to={`/products/${++index}`}>
            <Card key={index} shadow="sm" padding="lg" className="Items">
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
              <Text size="sm">Date published: ${product.createdAt}</Text>
            </Card>
            </Link>
            
          </Container>
        );
      })}
    </Box>
  );
};

export default ProductList;
