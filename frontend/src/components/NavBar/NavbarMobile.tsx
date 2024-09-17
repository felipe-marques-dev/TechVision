import { Box, Collapse, Flex, IconButton, SlideFade } from "@chakra-ui/react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { IoClose } from "react-icons/io5";
import { useState } from "react"
import { A, Button, Div } from "../../styles/NavBar/navbar";
import { Logo } from "../Logo";
import { FaCartShopping, FaMagnifyingGlass, FaRegUser } from "react-icons/fa6";
import DropDownNav from "./DropDownNav";
import { SearchBar } from "../SearchBar";

export const NavMenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<[]>([]);
  const [loggedIn, setLoggedIn] = useState<boolean>(false)

  return (
    <>
      <nav className="navbar bg-black" style={{zIndex: "1"}}>
        <Div className="container-fluid" id="header">
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
              m="0 !important"
              bgColor="black"
              position="absolute"
              top="100%"
              left="0"
              w="full"
              display={{ base: isOpen ? "block" : "none", md: "block"}}
            >
              <Flex flexDir="column" bg="black" className="position-relative">

                <nav className="navbar m-0 p-0">
                  <Div className="container-fluid d-flex justify-content-md-center position-relative text-center align-items-center p-0" id="header">
                    {/* Categorias */}
                    <div className="row p-0 me-2">
                      <DropDownNav></DropDownNav>
                    </div>
                    {/* Outras opcoes */}
                    <div className="p-0 m-0" style={{fontSize: "22px"}}>
                      <A className="p-0" href="/assinatura"> Assinatura</A>
                      </div>
                  </Div>
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