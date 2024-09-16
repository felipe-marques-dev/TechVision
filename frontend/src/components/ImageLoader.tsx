import { useNavigateProducts } from "../hooks/useNavigateProducts";
import React from "react";


type ImageProps = {
    src: string | undefined;
    erro: boolean;
    onClick: string;
    className ?: string;
    style ?: React.CSSProperties;
}

export const ImageLoader = (props: ImageProps) => {
    const { goToProduct } = useNavigateProducts();
    return (
        <div>
          {
            props.erro ? <h1 className={`${props.className} text-danger align-items-end`} style={props.style}>Erro ao carregar foto</h1> : <img
            src={props.src} 
            onClick={()  => goToProduct(props.onClick)}
            className={props.className}
            style={props.style}
            />

          }
        </div>

      );
    };