export interface Produto {
  name: string;
  product_id: number;
  category: string;
  sub_category: string;
  description: string;
  url_name: string;
  estoque: number;
  price: number;
  promotion: boolean;
  foto_1: string;
  foto_2?: string; // Se a foto 2 for opcional
  foto_3?: string; // Se a foto 3 for opcional
  foto_4?: string; // Se a foto 4 for opcional
}

export interface Item {
  produto: Produto;
  quantity: number;
}