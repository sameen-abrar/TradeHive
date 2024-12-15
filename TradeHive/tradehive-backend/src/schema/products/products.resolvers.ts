import { IProduct } from "../../services/products/interfaces/product.interface";
import { productService } from "../../services/products/implementation/product.service";

const _productService: IProduct = new productService();
export const productResolvers = {
  Query: {

  },
  Mutation: {
    addProduct: async (
      _: any,
      {
        title,
        description,
        price,
        rentPrice,
        categoryIds,
      }: { title: string; description: string; price: number; rentPrice: number; categoryIds: number[] }
    ) => {
      try {
        console.log("here:", categoryIds)
        const response = await _productService.createProduct({
          title: title,
          description: description,
          price: price,
          rentPrice: rentPrice,
          categoryIds: categoryIds
        });
        console.log("Product created with ID:", response);
        return `Product with ID ${response} created successfully`;
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error in addProduct resolver:", error.message);
        } else {
          console.error("An unexpected error occurred:", error);
        }
        throw new Error("Failed to add product");
      }
    },
  }
  
};
