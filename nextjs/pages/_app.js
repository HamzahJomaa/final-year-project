import "../styles/css/bootstrap.min.css"
import "../styles/css/magnific-popup.css"
import "../styles/css/jquery.mmenu.css"
import "../styles/css/owl.carousel.min.css"

import "../styles/css/style.css"
import "../styles/css/responsive.css"

import "../styles/revolution/css/settings.css"
import "../styles/revolution/css/layers.css"
import "../styles/revolution/css/navigation.css"


import HeadComponent from "../components/HeadComponent";
import ScriptComponent from "../components/ScriptComponent";

function MyApp({ Component, pageProps }) {
  return (
      <>
          <HeadComponent />
          <Component {...pageProps} />
          <ScriptComponent/>
      </>
  )
}

export default MyApp
