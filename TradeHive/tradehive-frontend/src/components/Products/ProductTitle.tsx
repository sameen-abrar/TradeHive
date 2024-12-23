import React from "react";
import {
  Box,
  TextInput,
  Title,
} from "@mantine/core";
import "./ProductList.css";
import { ProductFormData } from "../../shared/ProductFormData";

interface TitleProps {
  data: { title: string };
  setData: React.Dispatch<React.SetStateAction<ProductFormData>>;
}

const ProductTitle: React.FC<TitleProps> = ({data, setData}) => {
  return (
    <Box>
      <Title>Select a Title of your product</Title>
      <TextInput
        label="Title"
        placeholder="iPhone 15 pro max"
        value={data.title || ""}
        onChange={(e) => setData((prev) => ({ ...prev, title: e.target.value }))}
        required
      />
    </Box>
  );
};

export default ProductTitle;
