import { productListResponse, productRequest, productResponse } from "../../../models/products.model";

/**
 * Interface for Product operations including Create, Read, Update, and Delete.
 */
export interface IProduct {
    /**
     * Creates a new product in the system.
     * @param input - details of the product to enlist 
     * @returns A promise that resolves to the ID of the newly created product.
     */
    createProduct(
      input: productRequest
    ): Promise<number>;
  
    /**
     * Retrieves details of a product by its ID.
     * @param productId - The unique identifier of the product to retrieve.
     * @returns A promise that resolves to the product details or null if the product does not exist.
     */
    getProduct(productId: number): Promise<productResponse | null>;
  
    /**
     * Updates an existing product's information.
     * @param productId - The unique identifier of the product to update.
     * @param data - An object containing the fields to update. Fields are optional.
     * @param data.title - The updated title of the product.
     * @param data.description - The updated description of the product.
     * @param data.price - The updated selling price of the product.
     * @param data.rentPrice - The updated rental price of the product.
     * @param data.categoryIds - The updated list of category IDs the product belongs to.
     * @returns A promise that resolves to `true` if the update was successful or `false` if the product does not exist.
     */
    updateProduct(
      productId: number,
      data: {
        title?: string;
        description?: string;
        price?: number;
        rentPrice?: number;
        rentType?: string; 
        categoryIds?: number[];
      }
    ): Promise<boolean>;
  
    /**
     * Deletes a product from the system by its ID.
     * @param productId - The unique identifier of the product to delete.
     * @returns A promise that resolves to `true` if the deletion was successful or `false` if the product does not exist.
     */
    deleteProduct(productId: number): Promise<boolean>;

    /**
     * Retrieves all products.
     * @returns A promise that resolves to the product list or null if the product does not exist.
     */
    getAllProducts(): Promise<productListResponse[] | null>;

    /**
     * Accepts Rent a product.
     * @returns A promise that resolves to false if the product was not rented.
     */
    rentProduct(userId: number, productId: number, fromDate: Date, toDate: Date): Promise<boolean>;
  }
  