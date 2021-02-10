import styled from 'styled-components'

const LoginPageStyle = styled.main`
    #login {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        width: 80%;

        .form-login {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        #vertical-hr {
            border-left: 3px solid #ff54a1;
            height: 100%;
        }
    }
`

export default LoginPageStyle
