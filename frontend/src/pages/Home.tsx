import Carrossel from "../components/Carroussel/Carrossel";
import { Nav_bar } from "../components/NavBar/Navbar";
import PrincipaisProdutos from "../components/Produtos/PrincipaisProdutos";
import { Footer } from "../components/Footer";
export function Home(){
    return(
        <div>
            <Nav_bar />
            <Carrossel />
            <PrincipaisProdutos titulo="Principais Produtos" promotion={false}/>
            <PrincipaisProdutos titulo="Em Promoção" promotion={true}/>
            <Footer />
        </div>
        
    )
}