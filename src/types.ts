export interface Polo {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  colors: string[];
  sizes: string[];
}

export interface CartItem {
  polo: Polo;
  quantity: number;
  color: string;
  size: string;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
  };
}
