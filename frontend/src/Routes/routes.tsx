import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { Login } from "../pages/Login/index.tsx";
import { Cadastro } from "../pages/Cadastro/index.tsx";
import { Home } from "../pages/Home/index.tsx";
import { Profile } from "../pages/Profile/index.tsx";
import { ProdutoIndividual } from "../components/ProdutoIndividual.tsx";
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