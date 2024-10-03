import '../styles/footer.css';

export function Footer() {
    const instagram = 'instagram.png';
    const facebook = 'facebook.png';
    const whatsapp = 'whatsapp.jpg';
    const logo_tech_vision = 'logo_tech_vision.png';

    return (
        <>
            <div className="container-fluid" id="footer">
                <div className="d-flex justify-content-evenly mt-3 mb-3">
                    <div className="text-center">
                        <img src={`/images/${logo_tech_vision}`} id="img-footer" alt="Logo" className="me-2" />
                        <div>
                            <div>CNPJ: 00.000.000/0000-00</div>
                            <div>Endereço: Avenida Matheus Conegero, 395</div>
                            <div>Horário de funcionamento: das 9h às 18h</div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-evenly mb-3">
                    <div className="text-center">
                        <a target="self" className="link-light d-flex align-items-center" href="#">
                            <img src={`/images/${instagram}`} id="ico-ctt" alt="Instagram" />
                            Instagram
                        </a>
                    </div>

                    <div className="text-center">
                        <a target="self" className="link-light d-flex align-items-center" href="#">
                            <img src={`/images/${facebook}`} id="ico-ctt2" alt="Facebook" />
                            Facebook
                        </a>
                    </div>
                    
                    <div className="text-center">
                        <a target="self" className="link-light d-flex align-items-center" href="#">
                            <img src={`/images/${whatsapp}`} id="ico-ctt2" alt="WhatsApp" />
                            Fale conosco!
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
