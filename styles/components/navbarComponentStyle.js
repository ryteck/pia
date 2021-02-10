import styled from 'styled-components'

const NavbarComponentStyle = styled.nav`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: #1c122b;
    color: #ffffff;

    .nav-component {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;

        a {
            width: 150px;
            padding: 5px;
            text-align: center;
            background: none;
            border: 2px solid #ea2440;
            border-radius: 20px;
            color: #ffffff;
            cursor: pointer;
            transition: 0.25s;
            outline: none;
            box-shadow: 0 0 2px #ea2440;
            text-decoration: none;

            :hover {
                width: 200px;
                background-color: #ea2440;
                box-shadow: 0 0 100px #ea2440;
            } 
        }
    }
`

export default NavbarComponentStyle
