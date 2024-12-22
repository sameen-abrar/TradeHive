import React from "react";
import { Box, MultiSelect, Title } from "@mantine/core";
import { categories, ProductFormData } from "../../shared/ProductFormData";

interface Props {
  data: { category: number[] }; // Change to number array for IDs
  setData: React.Dispatch<React.SetStateAction<ProductFormData>>;
}

const SelectCategoryPage: React.FC<Props> = ({ data, setData }) => {
  // Define categories with their IDs
  

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
