import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import '../../styles/footer.css';

export function FooterMobile() {
    const logo_tech_vision = 'logo_tech_vision.png';

    return (
        <div className='static-bottom mt-5'>
            <div className="d-flex flex-column row p-5 mb-0 mt-5 mx-0 text-center me-0" id="footer-mobile">


                <div className='my-3 mx-0 col'>
                    <div>© 2024 Atena | CNPJ 00.000.000/0000-00</div>
                    <div>Avenida Matheus Conegero, 395</div>
                    <div>Horário de funcionamento das 9h às 18h</div>
                </div>

                <div className='my-3 col'>
                    <div><a href="/termos-de-uso" id='link-footer'>Termos e condições de uso</a> | <a href="/politica-de-privacidade" id='link-footer'>Política de Privacidade</a></div>
                </div>

                <div className="p-0 my-3 col">
                    <div className='mb-3'>
                        <b className='me-3'>Redes Sociais</b>
                    </div>
                    <div className='d-flex justify-content-center'>
                    <a className='me-3' target="self" href="#">
                        <FaInstagram size={25}/>
                    </a>

                    <a target="self" className="me-3" href="#">
                        <FaFacebook size={25}/>
                    </a>

                    <a target="self" className="me-3" href="#">
                        <FaWhatsapp size={27}/>
                    </a>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center my-0 p-0 me-0 border border-black' id='sub-footer-mobile'>
                Desenvolvido por
                <img src={`/images/${logo_tech_vision}`} id="logo-techvision" alt="Logo" className='m-0 p-0' />
            </div>
        </div>
    )
}
