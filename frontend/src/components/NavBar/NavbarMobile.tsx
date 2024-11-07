import { Box, Collapse, Flex, IconButton } from "@chakra-ui/react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { IoClose } from "react-icons/io5";
import { useState } from "react"
import { A, Button, Div } from "../../styles/NavBar/navbar";
import { Logo } from "../Logo";
import { FaCartShopping, FaRegUser } from "react-icons/fa6";
import DropDownNav from "./DropDownNav";
import { SearchBar } from "../SearchBar";

export const NavMenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <nav className="navbar bg-black border-bottom border-black m-0 p-0" style={{zIndex: "1", height: "150px"}}>
        <Div className="container-fluid border border-black m-0 p-0" id="header">
          <Div className="collapse navbar-collapse d-flex" id="navbarSupportedContent" >
            {/* Menu mobile */}
            <IconButton
              style={{ backgroundColor: "black", color: "white" }}
              icon={isOpen ? <IoClose /> : <HamburgerMenuIcon />}
              boxSize="3rem"
              size="2rem"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={""} 
              />
            {/* animação para a navbar */}
            <Collapse in={isOpen} animateOpacity> 
            <Box
              p="2rem 8rem"
              className="border border-black"
              bgColor="black"
              position="absolute"
              top="100%"
              left="0"
              w="full"
              display={{ base: isOpen ? "block" : "none", md: "block"}}
            >
              <Flex flexDir="column" bg="black" className="m-0 p-0">

                <nav className="navbar d-flex justify-content-center m-0 p-0">
                  <a className={`row`} id="header">
                    {/* Categorias */}
                    <div className={`row text-center m-0 p-0`}>
                      <DropDownNav></DropDownNav>
                    </div>
                    {/* Outras opcoes */}
                    <div className="row text-center m-0 p-0" style={{fontSize: "22px"}}>
                      <A href="/assinatura">Assinatura</A>
                    </div>
                  </a>
                </nav>
              </Flex>
            </Box>
            </Collapse>
            {/* Logo */}
            <Div className="navbar-brand ms-3" ><Logo /></Div>
            {/* Icone de usuario */}
            <div className="navbar-nav ms-auto d-flex justify-content-end">
              <A href="profile"><FaRegUser /></A>
            </div>
            {/* Carrinho */}
            <div className="navbar-nav ms-1">
              <A href="/carrinho" ><Div className="nav-link" ><FaCartShopping style={{ width: "40px" }} /></Div></A>
            </div>

          </Div>
          {/* Barra de pesquisa */}
          <SearchBar width="75"/>
          
        </Div>
      </nav>

    </>

  );
}