import { prisma } from "../../..";
import {
  productRequest,
  productResponse,
} from "../../../models/products.model";
import { IProduct as IProductService } from "../interfaces/product.interface";

export class productService implements IProductService {
  async createProduct(input: productRequest): Promise<number> {
    try {
      const product = await prisma.product.create({
        data: {
          title: input.title,
          description: input.description,
          price: input.price,
          rentPrice: input.rentPrice,
          createdAt: new Date(),
        },
      });

      console.log("Ids Product cat",input.categoryIds)

      if (product != null) {
        const categoryEntries = input.categoryIds.map((categoryId) => ({
          productId: product.id,
          categoryId: categoryId,
          createdAt: new Date(),
          updatedAt: null
        }));

        await prisma.productCategory.createMany({
          data: categoryEntries,
        });
      }

      return product.id; // Return the product ID as success
    } catch (error) {
      console.error("Error creating product:", error); // Log the error for debugging
      throw new Error("Failed to create product"); // Throw a user-friendly error
    }
  }
  getProduct(productId: number): Promise<productResponse | null> {
    throw new Error("Method not implemented.");
  }
  updateProduct(
    productId: number,
    data: {
      title?: string;
      description?: string;
      price?: number;
      rentPrice?: number;
      categoryIds?: number[];
    }
  ): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  deleteProduct(productId: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
