import { prisma } from "../../..";
import {
  productListResponse,
  productRequest,
  productResponse,
  UserProductsResponse,
} from "../../../models/products.model";
import { IProduct as IProductService } from "../interfaces/product.interface";

export class productService implements IProductService {
  async getUserProducts(userId: number): Promise<UserProductsResponse | null> {
    try {
      // Fetch products bought, sold, borrowed, and lent
      const [bought, sold, borrowed, lent] = await Promise.all([
        // Products bought by the user (from Invoice table)
        prisma.invoice.findMany({
          where: { userId },
          include: {
            product: {
              include: {
                categories: { include: { category: true } },
              },
            },
          },
        }),

        // Products sold by the user (user is createdBy)
        prisma.product.findMany({
          where: { createdBy: userId,
            invoices: {
              some: { productId: { not: undefined } },  // Ensure the product exists in the invoices table
            },
          },
          include: {
            categories: { include: { category: true } },
          },
        }),

        // Products borrowed by the user (from RentalBooking table)
        prisma.rentalBooking.findMany({
          where: { userId },
          include: {
            product: {
              include: {
                categories: { include: { category: true } },
              },
            },
          },
        }),

        // Products lent by the user (products where others have booked)
        prisma.product.findMany({
          where: { createdBy: userId,
            rentalBookings: {
              some: { productId: { not: undefined } },  // Ensure the product exists in the invoices table
            },
          },
          include: {
            categories: { include: { category: true } },
          },
        }),
      ]);

      // Helper function to format products
      const formatProduct = (data: any): productResponse => ({
        id: data.product?.id || data.id,
        title: data.product?.title || data.title,
        description: data.product?.description || "",
        price: data.product?.price || 0,
        rentPrice: data.product?.rentPrice || 0,
        rentType: data.product?.rentType || "",
        categories:
          data.product?.categories?.map((cat: any) => cat.category.name) || [],
        createdBy: data.product?.createdBy || data.createdBy || 0,
        createdAt: data.product?.createdAt || data.createdAt,
        updatedAt: data.product?.updatedAt || data.updatedAt,
      });

      // Organize response
      return <UserProductsResponse>{
        bought: bought.map((item) => formatProduct(item.product)),
        sold: sold.map(formatProduct),
        borrowed: borrowed.map((item) => formatProduct(item.product)),
        lent: lent.map(formatProduct),
      };
    } catch (error) {
      console.error("Error fetching products:", error); // Log the error for debugging
      throw new Error("Failed to fetch products"); // Throw a user-friendly error
    }
  }

  async getProductsByUserId(
    userId: number
  ): Promise<productListResponse[] | null> {
    try {
      const products = await prisma.product.findMany({
        where: {
          createdBy: userId,
          invoices: {
            none: {}, // No sold products shown
          },
        },
        include: {
          categories: {
            include: {
              category: true, // Include category details
            },
          },
        },
      });

      const productList: productListResponse[] = products.map((product) => ({
        id: product.id,
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
  async buyProduct(userId: number, productId: number): Promise<boolean> {
    try {
      console.log("rent service product Id: ", userId);
      const product = await prisma.product.findFirst({
        where: {
          id: productId,
        },
      });

      if (product == null) return false;

      const buy = await prisma.invoice.create({
        data: {
          userId: userId,
          productId: productId,
          createdAt: new Date(),
        },
      });

      console.log("product service: ", buy);

      if (buy != null) {
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error buying:", error); // Log the error for debugging
      throw new Error("Failed to buy products"); // Throw a user-friendly error
    }
  }
  async rentProduct(
    userId: number,
    productId: number,
    fromDate: Date,
    toDate: Date
  ): Promise<boolean> {
    try {
      console.log("rent service product Id: ", userId);
      const product = await prisma.product.findFirst({
        where: {
          id: productId,
        },
      });
      console.log("rent service product: ", product);
      const rental = await prisma.rentalBooking.create({
        data: {
          userId: userId,
          productId: productId,
          fromDate: fromDate,
          toDate: toDate,
          createdAt: new Date(),
        },
      });

      console.log("rent service: ", rental);

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
        where: {
          invoices: {
            none: {}, // No sold products shown
          },
        },
        include: {
          categories: {
            include: {
              category: true, // Include category details
            },
          },
        },
      });

      const productList: productListResponse[] = products.map((product) => ({
        id: product.id,
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
          createdBy: input.createdBy,
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
  async getProduct(productId: number): Promise<productResponse | null> {
    const product = await prisma.product.findFirst({
      where: {
        id: productId,
        invoices: {
          none: {}, // No sold products shown
        },
      },
      include: {
        categories: {
          include: {
            category: true,
          },
        },
      },
    });

    if (!product) {
      return null; // If no product is found, return null.
    }

    const productResponse: productResponse = {
      id: product.id,
      title: product.title,
      price: product.price ?? 0,
      description: product.description ?? "",
      rentPrice: product.rentPrice ?? 0,
      rentType: product.rentType ?? "",
      categories: product.categories.map((c) => c.category.name),
      createdAt: product.createdAt ?? new Date(),
      updatedAt: product.updatedAt ?? new Date(),
      createdBy: product.createdBy ?? -1,
    };

    return productResponse;
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
