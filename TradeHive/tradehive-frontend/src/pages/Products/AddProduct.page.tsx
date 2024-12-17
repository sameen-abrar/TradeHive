import React, { useState } from "react";
import ProductTitle from "../../components/Products/ProductTitle";
import SelectCategory from "../../components/Products/SelectCategory";
import { Button, Group, Stepper } from "@mantine/core";
import ProductDescription from "../../components/Products/ProductDescription";
import ProductPrice from "../../components/Products/ProductPrice";

const AddProductPage: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: [] as string[],
    price: "",
    rentPrice: "",
    rentType: "",
    description: "",
  });

  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : 4));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : 0));

  return (
    <>
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step label="Title">
          <ProductTitle data={formData} setData={setFormData} />
        </Stepper.Step>
        <Stepper.Step label="Select Category">
          <SelectCategory data={formData} setData={setFormData} />
        </Stepper.Step>
        <Stepper.Step label="Description">
          <ProductDescription data={formData} setData={setFormData} />
        </Stepper.Step>
        <Stepper.Step label="Price">
          <ProductPrice data={formData} setData={setFormData} />
        </Stepper.Step>
        <Stepper.Completed>
          <div>
            <h2>Summary</h2>
            <p>
              <strong>Title:</strong> {formData.title}
            </p>
            <p>
              <strong>Category:</strong> {formData.category.join(", ")}
            </p>
            <p>
              <strong>Price:</strong> {formData.price}
            </p>
            <p>
              <strong>Rent Price:</strong> {formData.rentPrice}
            </p>
            <p>
              <strong>Rent Type:</strong> {formData.rentType}
            </p>
            <p>
              <strong>Description:</strong> {formData.description}
            </p>
          </div>
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button color="red" onClick={nextStep}>
          Next
        </Button>
      </Group>
    </>
  );
};

export default AddProductPage;
