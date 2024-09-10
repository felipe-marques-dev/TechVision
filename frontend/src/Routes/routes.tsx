import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { Login } from "../pages/Login/index.tsx";
import { Cadastro } from "../pages/Cadastro/index.tsx";
import { Home } from "../pages/Home/index.tsx";

export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}