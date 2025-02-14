import { BrowserRouter, Route, Routes } from "react-router-dom";
import Venda from './pages/venda/Venda'
import Inicio from "./pages/inicio/Inicio";
import Gestao from './pages/gestao/Gestao'
import Estoque from "./pages/gestao/estoque/Estoque";


export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"
                    element={<Inicio />}
                />
                <Route path="/venda"
                    element={<Venda />}
                />
                <Route path="/gestao"
                    element={<Gestao />}
                />
                <Route path="/estoque"
                    element={<Estoque />}
                />
            </Routes>


        </BrowserRouter>
    );
}