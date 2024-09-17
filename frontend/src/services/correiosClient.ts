import axios from 'axios';
import { parseStringPromise } from 'xml2js';

const BASE_URL = `https://cors-anywhere.herokuapp.com/https://api.correios.com.br/CalcPrecoPrazo.asmx?`;


export async function calcularFrete(codigoServico: string, cepOrigem: string, cepDestino: string, peso: number) {
  const url = `${BASE_URL}/CalcPrecoPrazo.asmx?` +
              `nCdEmpresa=&sDsSenha=&sCepOrigem=${cepOrigem}` +
              `&sCepDestino=${cepDestino}&nVlPeso=${peso}` +
              `&nCdFormato=1&nVlComprimento=16&nVlAltura=2` +
              `&nVlLargura=11&nVlDiametro=0&sCdMaoPropria=N` +
              `&nVlValorDeclarado=0&sCdAvisoRecebimento=N` +
              `&StrRetorno=xml&nCdServico=${codigoServico}`;

  try {
    const response = await axios.get(url);
    // Parse XML response to JSON
    const jsonResponse = await parseStringPromise(response.data);
    return jsonResponse;
  } catch (error) {
    console.error("Erro ao calcular o frete:", error);
    throw error;
  }
}
