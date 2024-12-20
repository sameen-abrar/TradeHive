import React, { useState } from "react";
import ProductTitle from "../../components/Products/ProductTitle";
import SelectCategory from "../../components/Products/SelectCategory";
import { Button, Group, Stepper, Notification, Text } from "@mantine/core";
import ProductDescription from "../../components/Products/ProductDescription";
import ProductPrice from "../../components/Products/ProductPrice";
import { useAddProductMutation } from "../../gql/graphql";

const AddProductPage: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: [] as number[],
    price: "",
    rentPrice: "",
    rentType: "",
    description: "",
  });

  const userId = localStorage.getItem("userId");
    if (!userId) {
      return <Text>Error: User ID not found in local storage</Text>;
    }

  const [addProductMutation, { loading, error }] = useAddProductMutation();

  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : 4));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : 0));

  const handleAddProduct = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to add this product?"
    );
    if (!confirmed) return;

    try {
      await addProductMutation({
        variables: {
          title: formData.title,
          description: formData.description,
          price: parseFloat(formData.price),
          rentPrice: parseFloat(formData.rentPrice),
          rentType: formData.rentType,
          categoryIds: formData.category.map(Number), // Convert categories to IDs
          createdBy: parseInt(userId), // Replace with actual user ID
        },
      });
      alert("Product added successfully!");
      // Optionally, reset the form or navigate to another page
    } catch (e) {
      console.error("Error adding product", e);
    }
  };

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
        {active === 4 ? (
          <Button color="green" onClick={handleAddProduct} loading={loading}>
            Confirm
          </Button>
        ) : (
          <Button color="red" onClick={nextStep}>
            Next
          </Button>
        )}
      </Group>

      {error && (
        <Notification color="red" title="Error">
          {error.message}
        </Notification>
      )}
    </>
  );
};

export default AddProductPage;
