import React, { useState } from 'react';
import { calcularFrete } from '../../services/correiosClient';

function Calculo() {
  const [cepOrigem, setCepOrigem] = useState('');
  const [cepDestino, setCepDestino] = useState('');
  const [peso, setPeso] = useState<number | number>(0);
  const [frete, setFrete] = useState<number | null>(null);
  const [codigoServico, setCodigoServico] = useState('40010'); // Código do serviço (ex: SEDEX)
  const [error, setError] = useState<string | null>(null);

  const handleCalculateFrete = async () => {
    setError(null);
    try {
      // Assegure-se de que os valores sejam válidos
      if (!cepOrigem || !cepDestino || peso <= 0) {
        setError('Por favor, preencha todos os campos corretamente.');
        return;
      }

      // Calcula o frete
      const result = await calcularFrete(codigoServico, cepOrigem, cepDestino, peso);
      
      // Ajuste de acordo com a estrutura da resposta da API
      if (result && result.CalcPrecoPrazoResult && result.CalcPrecoPrazoResult.Servicos) {
        const valorFrete = result.CalcPrecoPrazoResult.Servicos.cServico.Valor;
        setFrete(parseFloat(valorFrete.replace(',', '.')));
      } else {
        setError('Não foi possível calcular o frete.');
      }
    } catch (error) {
      console.error("Erro ao calcular o frete:", error);
      setError('Ocorreu um erro ao calcular o frete.');
    }
  };

  return (
    <div>
      <div>
        <label>
          CEP de Origem:
          <input
            type="text"
            value={cepOrigem}
            onChange={(e) => setCepOrigem(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          CEP de Destino:
          <input
            type="text"
            value={cepDestino}
            onChange={(e) => setCepDestino(e.target.value)}
          />
        </label>
      </div>
      <div>
        Peso: 
      <input
        type="number"
        value={peso || ''}
        onChange={(e) => setPeso(parseFloat(e.target.value) || 0)}
        />

      </div>
      <button onClick={handleCalculateFrete}>Calcular Frete</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {frete !== null && <p>Valor do Frete: R$ {frete.toFixed(2)}</p>}
    </div>
  );
}

export default Calculo;
