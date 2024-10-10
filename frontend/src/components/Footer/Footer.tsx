import '../../styles/footer.css';
import { useMediaQuery } from "@chakra-ui/react";
import { FooterDesktop } from './FooterDesktop';
import { FooterMobile } from './FooterMobile';

export function Footer() {
    // variavel que guarda o valor minimo para trocar de navbar
    const [isLargerThanMD] = useMediaQuery("(min-width: 800px)");
    return (
        <>
            {/* Verfica o tamanho da janela do usuario
            se for menor que 800px o footer fica no formato mobile */}
            {isLargerThanMD ? <FooterDesktop/> : <FooterMobile/>}
        </>
    )
}
