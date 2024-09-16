import { client } from "../../services/client";

interface Produto{
    name: string;
    product_id: number;
    price: number;
    url_name: string;
    foto_1?: string;
    foto_2?: string;
    foto_3?: string;
    foto_4?: string;
}

export const pegarProdutos = async (path:string) => {
    const produtos: Produto[] = [];
    const errors: Map<string, boolean> = new Map();
    try {
      const response = await client.get(path);
      const produtosData = response.data; // inicializa o mapa de erros

      // verifica se a imagem existe para cada produto
      for (const produto of produtosData) {
        try {
         await client.get(produto.foto_1);
        } catch {
          errors.set(produto.url_name, true) // marca o erro para esta imagem
        }
      }
      return { produtos: produtosData, errors };
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      return { produtos: [], errors: new Map() };
    }
  };