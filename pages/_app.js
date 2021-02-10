import AppStyle from './../styles/appStyle'

function MyApp (props) {
  const { Component, pageProps } = props
  return (
    <>
      <AppStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
