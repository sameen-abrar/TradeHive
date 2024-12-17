import React from "react";
import {
  Box,
  Textarea,
  Title,
} from "@mantine/core";
import "./ProductList.css";
import { ProductFormData } from "./ProductTitle";

interface DescriptionProps {
  data: { description: string };
  setData: React.Dispatch<React.SetStateAction<ProductFormData>>;
}

const ProductDescription: React.FC<DescriptionProps> = ({data, setData}) => {
  return (
    <Box>
      <Title>Select description</Title>
      <Textarea
        label="Description"
        placeholder="its a good phone"
        value={data.description || ""}
        onChange={(e) => setData((prev) => ({ ...prev, description: e.target.value }))}
      />
    </Box>
  );
};

export default ProductDescription;
