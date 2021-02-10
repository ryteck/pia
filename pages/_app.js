import AppStyle from './../styles/appStyle'
import NavbarComponent from './../components/navbar'
import { useRouter } from 'next/router'

function MyApp (props) {
  const { Component, pageProps } = props
  const router = useRouter()

  const toHome = e => {
    e.preventDefault()
    router.push('/')
  }

  return (
    <div id='root'>
      <AppStyle />
      <NavbarComponent />
      <Component {...pageProps} />
      <div id="home-button-float" onClick={toHome}>
        <span className="material-icons">
          home
        </span>
      </div>
    </div>
  )
}

export default MyApp
