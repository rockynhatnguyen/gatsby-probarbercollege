/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"
import "./layout.css"
import "./global.css"

const theme = createMuiTheme({  typography: {
  fontFamily: [
      'Nunito',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#111',
    },
    secondary: {
      main: '#C7C7C7'
    }
  },
  overrides: {
    // Style sheet
    MuiButton: {
      // Name of the rule
      root: {
        borderRadius: '5rem',
        transition: 'all 0.7s ease',
        fontWeight: '700',
      },
      contained: {
        background: '#C7C7C7',
        border: '1px solid #111',
        padding: '5px 35px',
        '&:hover': {
          backgroundColor: '#000',
          border: '1px solid #111',
          color: '#FFF',
        },
      },
      outlined: {
        background: '#transparent',
        border: '1px solid #C7C7C7',
        color: '#C7C7C7',
        padding: '5px 35px',
        '&:hover': {
          background: '#C7C7C7',
          color: '#000',
        }
      },
    },
  },
});

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Layout
