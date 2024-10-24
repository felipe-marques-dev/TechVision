import React from "react";
import { Spinner } from "react-bootstrap";

const frases: string[] = ["Aguarde, carregando...", "Por favor, aguarde...", "Processando...", "Carregando...", "Um momento...", "Aguarde alguns segundos...", "Por favor, aguarde um momento...", "Aguarde um pouco..."];
const fraseEscolhida: number = Math.floor(Math.random() * frases.length);

interface LoadingProps extends React.Props<typeof Loading> {
  height: string; // Height of the loading spinner in pixels. Default is '100px'.
  withPhrase: boolean; // Whether to display a phrase or not. Default is true. 
}

export function Loading(props: LoadingProps) {

  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{height: `${props.height}`, width: "100%"}}>
      <Spinner animation="border" />
      {props.withPhrase && <div className="mt-3">{frases[fraseEscolhida]}</div>}
    </div>
  );
}