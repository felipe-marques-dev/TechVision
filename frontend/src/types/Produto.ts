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
    foto_2?: string;
    foto_3?: string;
    foto_4?: string;
}

export interface Item {
  produto: Produto;
  quantity: number;
}