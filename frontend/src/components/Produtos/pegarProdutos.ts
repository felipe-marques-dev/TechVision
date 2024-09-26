import { useState } from "react";
import { client } from "../../services/client";
import { AxiosResponse } from "axios";

interface Produto {
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

  export const pegarProdutoIndividual = async (path: string): Promise<Produto | null> => {
    try {
        const response: AxiosResponse<Produto> = await client.get(path);
        return response.data; // Retorna o objeto Produto
    } catch (error) {
        console.error('Erro ao pegar produto individual:', error);
        return null; // Retorna null em caso de erro
    }
};