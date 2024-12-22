export interface ProductFormData {
    title: string;
    category: number[];
    price: string;
    description: string;
    rentPrice: string;
    rentType: string;
  }

export const categories = [
    { value: "1", label: "ELECTRONICS" },
    { value: "2", label: "FURNITURE" },
    { value: "3", label: "HOME APPLIANCES" },
    { value: "4", label: "SPORTING GOODS" },
    { value: "5", label: "OUTDOOR" },
    { value: "6", label: "TOYS" },
  ];