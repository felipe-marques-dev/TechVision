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
export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/produto/:id" element={<ProdutoIndividual />}/>
                <Route path="/carrinho" element={<Carrinho />} />
            </Routes>
        </Router>
    )
}