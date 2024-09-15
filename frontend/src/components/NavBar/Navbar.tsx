import { useMediaQuery } from "@chakra-ui/react";
import { NavMenuMobile } from "./NavbarMobile";
import { NavbarDesktop } from "./NavbarDesktop";

export function Nav_bar() {
  // variavel que guarda o valor minimo para trocar de navbar
  const [isLargerThanMD] = useMediaQuery("(min-width: 800px)");

  return (
    <>
     {/* Verfica o tamanho da janela do usuario
     se for menor que 800px a navbar fica no formato mobile */}
      {isLargerThanMD ? <NavbarDesktop /> : <NavMenuMobile />}
    </>
  )
}