import React from "react";
import { Box, MultiSelect, Title } from "@mantine/core";
import { ProductFormData } from "../../shared/addProductFormData";

interface Props {
  data: { category: number[] }; // Change to number array for IDs
  setData: React.Dispatch<React.SetStateAction<ProductFormData>>;
}

const SelectCategoryPage: React.FC<Props> = ({ data, setData }) => {
  // Define categories with their IDs
  const categories = [
    { value: "1", label: "ELECTRONICS" },
    { value: "2", label: "FURNITURE" },
    { value: "3", label: "HOMEAPPLIANCES" },
    { value: "4", label: "SPORTING GOODS" },
    { value: "5", label: "OUTDOOR" },
    { value: "6", label: "TOYS" },
  ];

  return (
    <Box>
      <Title>Select category</Title>
      <MultiSelect
        label="Choose categories"
        placeholder="Pick categories"
        data={categories}
        value={data.category.map(String)} // Convert IDs to string for MultiSelect
        onChange={(values) =>
          setData((prev) => ({
            ...prev,
            category: values.map(Number), // Convert selected values back to numbers
          }))
        }
      />
    </Box>
  );
};

export default SelectCategoryPage;
