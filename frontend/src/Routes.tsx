import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { Cadastro } from "./pages/Cadastro";
import { Login } from "./pages/Login";

export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}