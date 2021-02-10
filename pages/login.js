import LoginPageStyle from './../styles/pages/loginPageStyle'

const LoginPage = () => {
  return (
    <LoginPageStyle>
      <div id="login">
        <div className="form-login">
          <h1>Login</h1>
          <input type="text" placeholder="Username"/>
          <input type="password" placeholder="senha"/>
          <input type="button" value="Logar"/>
        </div>

        <div id="vertical-hr"/>

        <div className="form-login">
          <h1>Cadastro</h1>
          <input type="text" placeholder="Nome completo"/>
          <input type="email" placeholder="Email"/>
          <input type="text" placeholder="Telefone"/>
          <input type="text" placeholder="Cidade"/>
          <input type="button" value="Cadastrar"/>
        </div>
      </div>
    </LoginPageStyle>
  )
}

export default LoginPage
