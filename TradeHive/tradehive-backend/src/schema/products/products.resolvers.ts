import { IProduct } from "../../services/products/interfaces/product.interface";
import { productService } from "../../services/products/implementation/product.service";
import { prisma } from "../..";

const _productService: IProduct = new productService();
export const productResolvers = {
  Query: {
    deleteProduct: async (
      _: any,
      {
        productId
      }:
      {
        productId: number
      }
    ) => {
      try{
        console.log("pro: ", productId)
        const response = await _productService.deleteProduct(productId);

        return response
      }catch (error) {
        if (error instanceof Error) {
          console.error("Error in delete product resolver:", error.message);
        } else {
          console.error("An unexpected error occurred:", error);
        }
        throw new Error("deletion failed");
      }
    }
  },
  Mutation: {
    addProduct: async (
      _: any,
      {
        title,
        description,
        price,
        rentPrice,
        rentType,
        categoryIds,
      }: {
        title: string;
        description: string;
        price: number;
        rentPrice: number;
        rentType: string;
        categoryIds: number[];
      }
    ) => {
      try {
        console.log("here:", categoryIds);
        const response = await _productService.createProduct({
          title: title,
          description: description,
          price: price,
          rentPrice: rentPrice,
          rentType: rentType,
          categoryIds: categoryIds,
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
    updateProduct: async (
      _: any,
      {
        productId,
        title,
        description,
        price,
        rentPrice,
        rentType,
      }: {
        productId: number;
        title: string;
        description: string;
        price: number;
        rentPrice: number;
        rentType: string;
      }
    ) => {
      try {
        console.log("here:", productId);
        const response = await _productService.updateProduct(
          productId,
          {
          title: title,
          description: description,
          price: price,
          rentPrice: rentPrice,
          rentType: rentType
        }
        );
        console.log("Product updated with ID:", productId);
        return `Product with ID ${productId} created successfully`;
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error in addProduct resolver:", error.message);
        } else {
          console.error("An unexpected error occurred:", error);
        }
        throw new Error("Failed to add product");
      }
    },
  },
};
