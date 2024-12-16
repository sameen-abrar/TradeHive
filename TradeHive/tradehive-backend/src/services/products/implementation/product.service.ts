import { prisma } from "../../..";
import {
  productListResponse,
  productRequest,
  productResponse,
} from "../../../models/products.model";
import { IProduct as IProductService } from "../interfaces/product.interface";

export class productService implements IProductService {
  async rentProduct(
    userId: number,
    productId: number,
    fromDate: Date,
    toDate: Date
  ): Promise<boolean> {
    try {
      
      console.log("rent service product Id: ", userId)
      const product = await prisma.product.findFirst({
        where:{
          id: productId
        }
      })
      console.log("rent service product: ", product)
      const rental = await prisma.rentalBooking.create({
        data: {
          userId: userId,
          productId: productId,
          fromDate: fromDate,
          toDate: toDate,
          createdAt: new Date(),
        },
      });

      console.log("rent service: ", rental)

      if (rental != null) {
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error fetching products:", error); // Log the error for debugging
      throw new Error("Failed to fetch products"); // Throw a user-friendly error
    }
  }
  async getAllProducts(): Promise<productListResponse[] | null> {
    try {
      const products = await prisma.product.findMany({
        include: {
          categories: {
            include: {
              category: true, // Include category details
            },
          },
        },
      });

      const productList: productListResponse[] = products.map((product) => ({
        title: product.title,
        description: product.description ?? "",
        price: product.price ?? 0,
        rentPrice: product.rentPrice ?? 0,
        rentType: product.rentType ?? "",
        categories: product.categories.map((cat) => cat.category.name), // Extract category names
        createdAt: product.createdAt ?? new Date(),
      }));

      return productList;
    } catch (error) {
      console.error("Error fetching products:", error); // Log the error for debugging
      throw new Error("Failed to fetch products"); // Throw a user-friendly error
    }
  }
  async createProduct(input: productRequest): Promise<number> {
    try {
      const product = await prisma.product.create({
        data: {
          title: input.title,
          description: input.description,
          price: input.price,
          rentPrice: input.rentPrice,
          rentType: input.rentType,
          createdAt: new Date(),
        },
      });

      console.log("Ids Product cat", input.categoryIds);

      if (product != null) {
        const categoryEntries = input.categoryIds.map((categoryId) => ({
          productId: product.id,
          categoryId: categoryId,
          createdAt: new Date(),
          updatedAt: null,
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
  async updateProduct(
    productId: number,
    data: {
      title?: string;
      description?: string;
      price?: number;
      rentPrice?: number;
      rentType?: string;
      categoryIds?: number[];
    }
  ): Promise<boolean> {
    // Find the product by ID
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    // If product doesn't exist, return an error message
    if (!product) {
      return false;
    }

    // Update the product with the new values
    const updatedProduct = await prisma.product.update({
      where: {
        id: productId,
      },
      data: data,
    });

    // Return a success message
    return true;
  }
  async deleteProduct(productId: number): Promise<boolean> {
    try {
      await prisma.productCategory.deleteMany({
        where: {
          productId: productId,
        },
      });

      await prisma.product.delete({
        where: {
          id: productId,
        },
      });

      return true;
    } catch (error) {
      console.error("Error deleting product:", error);
      throw new Error("Failed to delete product");
    }
  }
}
