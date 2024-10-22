import { Nav_bar } from "../components/NavBar/Navbar";
import PrincipaisProdutos from "../components/Produtos/PrincipaisProdutos";
import { Footer } from "../components/Footer/Footer";
import { Suspense } from "react";
import React from "react";
import { Spinner } from "react-bootstrap";

const Carrossel = React.lazy(() => import("../components/Carroussel/Carrossel"));

export function Home() {
    return (
        <div>
            <Nav_bar />
            <Suspense fallback={<div className="d-flex justify-content-center align-items-center" style={{ height: "450px" }}>
                <Spinner animation="border" />
            </div>}>
                <Carrossel />
            </Suspense>
            <PrincipaisProdutos titulo="Principais Produtos" promotion={false} />
            <PrincipaisProdutos titulo="Em Promoção" promotion={true} />
            <Footer />
        </div>
    )
}