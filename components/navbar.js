import NavbarComponentStyle from './../styles/components/navbarComponentStyle'
import Link from 'next/link'

const NavbarComponent = () => {
  return (
    <NavbarComponentStyle>
      <div className='nav-component'>
        PROJETO INFORMAÇÃO
      </div>
      <div className='nav-component'>
        <h2>
          Início
        </h2>
      </div>
      <div className='nav-component'>
        <Link href="/login">Login</Link>
      </div>
    </NavbarComponentStyle>
  )
}

export default NavbarComponent
