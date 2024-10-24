import { Button } from "react-bootstrap";
import { Footer } from "./Footer/Footer";
import { Nav_bar } from "./NavBar/Navbar"

export function NotFound() {
  return (
    <>
    <Nav_bar/>
    <div className="d-flex flex-column justify-content-center align-items-center p-4 text-center" style={{minHeight: "550px"}}>
        <h1 className="mt-5">Desculpe, essa página não está disponível.</h1>
        <p>O seu link pode estar quebrado ou a página pode ter sido removida.</p>
        <Button className="mt-2 rounded-3" href="/">Volte para a tela inicial</Button>
    </div>
    <Footer />
    </>
  );
}