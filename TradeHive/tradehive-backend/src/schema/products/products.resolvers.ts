import { IProduct } from "../../services/products/interfaces/product.interface";
import { productService } from "../../services/products/implementation/product.service";
import { prisma } from "../..";

const _productService: IProduct = new productService();
export const productResolvers = {
  Query: {
    deleteProduct: async (_: any, { productId }: { productId: number }) => {
      try {
        console.log("pro: ", productId);
        const response = await _productService.deleteProduct(productId);

        return response;
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error in delete product resolver:", error.message);
        } else {
          console.error("An unexpected error occurred:", error);
        }
        throw new Error("deletion failed");
      }
    },
    getAllProducts: async (_: any) => {
      const products = await _productService.getAllProducts();

      return products;
    },
    getProduct: async (_: any, { productId }: { productId: number }) => {
      const product = await _productService.getProduct(productId);

      return product;
    },
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
        const response = await _productService.updateProduct(productId, {
          title: title,
          description: description,
          price: price,
          rentPrice: rentPrice,
          rentType: rentType,
        });
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
    rentProduct: async (
      _: any,
      {
        productId,
        userId,
        fromDate,
        toDate,
      }: {
        productId: number;
        userId: number;
        fromDate: Date;
        toDate: Date;
      }
    ) => {
      try {
        console.log("datXXXXXXXXXXXe", fromDate);
        const response = await _productService.rentProduct(
          userId,
          productId,
          fromDate,
          toDate
        );
        return response;
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error in rentProduct resolver:", error.message);
        } else {
          console.error("An unexpected error occurred:", error);
        }
        throw new Error("Failed to add product");
      }
    },
    buyProduct: async (
      _: any,
      {
        productId,
        userId,
        fromDate,
        toDate,
      }: {
        productId: number;
        userId: number;
        fromDate: Date;
        toDate: Date;
      }
    ) => {
      try {
        const response = await _productService.buyProduct(userId, productId);
        return response;
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error in buyProduct resolver:", error.message);
        } else {
          console.error("An unexpected error occurred:", error);
        }
        throw new Error("Failed to buy product");
      }
    },
  },
};
