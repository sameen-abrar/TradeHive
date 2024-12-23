export interface productRequest {
    title: string; // Name of the product
    description: string; // Detailed description of the product
    price: number; // Selling price of the product
    rentPrice: number; // Rental price of the product
    rentType: string; // Rental price of the product
    categoryIds: number[]; // Array of related category Ids
    createdBy: number; // Date when the product was created
  }

export interface productResponse {
  id: number; // Unique identifier for the product
  title: string; // Name of the product
  description: string; // Detailed description of the product
  price: number; // Selling price of the product
  rentPrice: number; // Rental price of the product
  rentType: string; // Rental price of the product
  categories: string[]; // Array of related categories
  createdBy: number; // Date when the product was created
  createdAt: Date; // Date when the product was created
  updatedAt: Date; // Date when the product was last updated
}

export interface Category {
  name: string; // Name of the category (e.g., ELECTRONICS, FURNITURE)
  products: productRequest[]; // Array of products in this category
  createdAt: Date; // Date when the category was created
  updatedAt: Date; // Date when the category was last updated
}

export interface productListResponse{
  title: string; // Name of the product
  description: string; // Detailed description of the product
  price: number; // Selling price of the product
  rentPrice: number; // Rental price of the product
  rentType: string; // Rental price of the product
  categories: string[]; // Array of related categories
  createdAt: Date
}
export interface UserProductsResponse {
  bought?: productResponse[];   // List of bought products
  sold?: productResponse[];     // List of sold products
  borrowed?: productResponse[]; // List of borrowed products
  lent?: productResponse[];     // List of lent products
}