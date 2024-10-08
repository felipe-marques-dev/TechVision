import { useState } from "react";
import { client } from "../../services/client";
import { AxiosResponse } from "axios";
import { Produto } from "../../types/Produto";

export const pegarProdutos = async (path: string) => {
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