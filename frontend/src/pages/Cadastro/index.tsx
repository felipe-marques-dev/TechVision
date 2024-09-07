import { useEffect } from "react";

export function Cadastro(){

    // Alterar a tag title da pagina
    useEffect(() => {
        document.title = 'Cadastro';
    }, []);

    return (
      <div className="container-fluid mb-3 rounded-4 w-25 position-absolute top-50 start-50 translate-middle bg-secondary p-4" style={{borderRadius: '20px'}}>
      <h1 className="d-flex justify-content-center" id="title">Cadastre-se</h1>
      <form id="cadastro-form" method="post">
          <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label">Email</label><br/>
              <input type="email" name="email" id="inputEmail" className="form-control"/>
              <div id="email-error" className="text-danger"></div>
          </div>
          <div className="mb-3">
              <label htmlFor="inputNome" className="form-label">Nome</label><br/>
              <input type="text" name="first_name" id="inputNome" className="form-control"/>
              <div id="nome-error" className="text-danger"></div>
          </div>
          <div className="mb-3">
              <label htmlFor="inputSobrenome" className="form-label">Sobrenome</label><br/>
              <input type="text" name="last_name" id="inputSobrenome" className="form-control"/>
              <div id="sobrenome-error" className="text-danger"></div>
          </div>
          <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">Senha</label><br/>
              <input type="password" name="password" id="inputPassword" className="form-control"/>
              <div id="password-error" className="text-danger"></div>
          </div>
          <div className="col-12 d-flex justify-content-center">
              <button type="submit" className="btn btn-dark mt-4 rounded-4" style={{borderRadius: '10px'}}>Criar conta</button>
          </div>
      </form>
      <br />
      <p>Já possui uma conta? Faça o Login <a href="/login">aqui</a></p>
  </div>
  )
}