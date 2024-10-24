import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { Login } from "../pages/Login.tsx";
import { Cadastro } from "../pages/Cadastro.tsx";
import { Home } from "../pages/Home.tsx";
import { Profile } from "../pages/Profile.tsx";
import { ProdutoIndividual } from "../components/Produtos/ProdutoIndividual.tsx";
import { Carrinho } from "../pages/Carrinho/index.tsx";
import ProdutosCategoria from "../components/Produtos/ProdutosCategoria.tsx";
import Categoria from "../pages/Categoria.tsx";
import { EsqueciMinhaSenhaVerificacao, EsqueciMinhaSenha } from "../pages/EsqueciMinhaSenha.tsx";
import { TermosDeUsos } from "../pages/TermosDeUsos.tsx";
import { PoliticadePrivacidade } from "../pages/PoliticadePrivacidade.tsx";
import { Assinatura } from "../pages/Assinatura.tsx";
import { NotFound } from "../components/404.tsx";

export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path ="/assinatura" element={<Assinatura />} />
                <Route path={"/produto/:url_name"} element={<ProdutoIndividual />}/>
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/termos-de-uso" element={<TermosDeUsos />} />
                <Route path="/politica-de-privacidade" element={<PoliticadePrivacidade />} />
                <Route path={"/categoria/:name"} element={<Categoria/>} />
                <Route path="/redefinicao-de-senha/" element={<EsqueciMinhaSenhaVerificacao />} />
                <Route path="/redefinicao-de-senha/:encoded_pk/:token/" element={<EsqueciMinhaSenha />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}








