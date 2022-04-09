import '../styles/globals.css'

import loadStore from "../redux/index";
import Script from "../components/Script";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import React from "react";
import LoginComponent from "../components/LoginComponent";
import {createTheme, ThemeProvider} from "@mui/material";
import SignUpComponent from "../components/SignUpComponent";

const {store, persistor} = loadStore();

const Loader = () => (
        <div id="preloader">
        <img className="logo" src="images/logo1.png" alt="" width="119" height="58"/>
        <div id="status">
            <span></span>
            <span></span>
        </div>
    </div>
)

const theme = createTheme({
    typography: {
        fontFamily: 'Dosis,sans-serif',
    },
    components: {
        // Name of the component
        MuiPaginationItem: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    color: "white",
                    "&.Mui-selected":{
                        background:"rgba(255,255,255,.7)"
                    }
                },
            },
        },
        MuiInputLabel:{
            styleOverrides:{
                root:{
                    fontWeight: 600
                }
            }
        },
        MuiButtonBase:{
            styleOverrides:{
                root:{
                    "&:hover":{
                        backgroundColor: "#020d18 !important" 
                    }
                }
            }
        }
    },
})

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider theme={theme}>
          <link rel="stylesheet" href='/css/style.css'/>
          <link rel="stylesheet" href='/css/plugins.css'/>
          <Loader />
          <HeaderComponent />
          <LoginComponent />
          <SignUpComponent />
          <Component {...pageProps} />
          <Script/>
          <FooterComponent />
      </ThemeProvider>
  )
}

export default MyApp
