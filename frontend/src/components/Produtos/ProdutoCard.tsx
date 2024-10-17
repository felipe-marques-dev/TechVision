import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Produto } from "../../types/Produto";
import { useNavigateProducts } from "../../hooks/useNavigateProducts";
export default function ProdutoCard(props: Produto) {
    const { goToProduct } = useNavigateProducts();

    return (
        <Card className="swiper-slide mb-4" onClick={() => goToProduct(props.url_name)} key={props.url_name} style={{ width: '306px', maxHeight: '420px', minHeight: '420px' }}>
            <Card.Img
                variant="top"
                style={{
                    width: "100%",
                    height: "240px",
                    objectFit: "contain",  // Ajusta a imagem sem cortar
                    objectPosition: "center",
                    padding: '10px'
                }}
                src={props.foto_1}
            />
            <Card.Body>
                <Card.Text
                    className="fs-4"
                    style={{
                        color: 'gray',
                        textDecoration: 'line-through',
                        marginBottom: '0px',
                        marginTop: '1vh'
                    }}
                >
                    {`R$${((1.3 * props.price).toFixed(0))}`}
                </Card.Text>
                <Card.Title className="fs-2">
                    {`R$${((props.price.toFixed(2)).toString()).replace('.', ',')}`}
                </Card.Title>
                <Card.Text>
                    {props.description.length > 50 ? `${props.description.slice(0, 50)}...` : props.description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}