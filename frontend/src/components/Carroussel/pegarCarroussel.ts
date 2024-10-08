import { useState } from "react";
import { client } from "../../services/client";
import { AxiosResponse } from "axios";
import { Produto } from "../../types/Produto";
import { Carroussel } from "../../types/Carroussel";

export const pegarCarroussel = async (path: string) => {
  const carroussel: Carroussel[] = [];
  const errors: Map<string, boolean> = new Map();
  try {
    const response = await client.get(path);
    const carrousselData = response.data; // inicializa o mapa de erros

    // verifica se a imagem existe para cada produto
    for (const carroussel of carrousselData) {
      try {
        await client.get(carroussel.foto);
      } catch {
        errors.set(carroussel.url, true) // marca o erro para esta imagem
      }
    }
    return { carroussel: carrousselData, errors };
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return { carroussel: [], errors: new Map() };
  }
};
