import React from "react";
import { Box, Select, SimpleGrid, TextInput, Title } from "@mantine/core";
import "./ProductList.css";
import { ProductFormData } from "../../shared/addProductFormData";

interface Props {
  data: { price: string, rentPrice: string , rentType: string};
  setData: React.Dispatch<React.SetStateAction<ProductFormData>>;
}

const ProductPrice: React.FC<Props> = ({data, setData}) => {
  const rentTypes = ["Per Day", "Per Hour"]
  return (
    <Box>
      <Title>Select Price</Title>
      <TextInput
        placeholder="Purchased Price"
        value={data.price}
        onChange={(e) => setData((prev) => ({ ...prev, price: e.target.value }))}
        required
      />
      <SimpleGrid cols={2}>
        <div>
        <TextInput
        label="Rent"
        placeholder="Rent"
        value={data.rentPrice}
        onChange={(e) => setData((prev) => ({ ...prev, rentPrice: e.target.value }))}
      />
        </div>
        <div>
        <Select
              label="Rent Type"
              placeholder="Pick value"
              data={rentTypes}
              value={data.rentType}
              onChange={(value) => setData((prev) => ({ ...prev, rentType: value || "" }))}
            />
        </div>
      </SimpleGrid>
    </Box>
  );
};

export default ProductPrice;
