import React from "react";
import { Box, MultiSelect, Select, Title } from "@mantine/core";
import { ProductFormData } from "./ProductTitle";

interface Props {
  data: { category: string[] };
  setData: React.Dispatch<React.SetStateAction<ProductFormData>>;
}

const SelectCategoryPage: React.FC<Props> = ({data, setData}) => {
  const categories = [
    "ELECTRONICS",
    "FURNITURE",
    "HOMEAPPLIANCES",
    "SPORTING GOODS",
    "OUTDOOR",
    "TOYS",
  ];
  return (
    <Box>
      <Title>Select category</Title>
      <MultiSelect
      label="Your favorite library"
      placeholder="Pick value"
      data={categories}
      value={data.category}
      onChange={(value) => setData((prev) => ({ ...prev, category: value || "" }))}
    />
    </Box>
  );
};

export default SelectCategoryPage;
