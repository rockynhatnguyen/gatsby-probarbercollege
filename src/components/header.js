import * as React from "react"
import { Link } from "gatsby"
import { AppBar, Button, Toolbar } from "@material-ui/core"
import { List, ListItem, ListItemText } from "@material-ui/core"

import "./Header.css"

import logo from "../images/logo-pro-barber-college@2x.jpg"

const navLinks = [
  { title: `Home`, path: `/` },
  { title: `Plans`, path: `/plans` },
  { title: `Contact`, path: `/contact` },
  { title: `Application`, path: `/application` }
]

const Header = () => {
  return (
  <AppBar position="sticky"
  style={{
    background: '#232526',
    marginBottom: '1.45rem',
  }}>
    <Toolbar className="toolbar">
      <div className="max-w-7xl w-full overflow-hidden flex justify-between items-center mx-auto">
        <Link className="logo-link" to="/"><img className="site-logo" src={logo} alt="Pro Barber College logo" /></Link>
        <List className="nav-links" component="nav" aria-labelledby="main navigation">
          {navLinks.map(({ title, path }) => (
            <Link to={path} key={title}>
              <ListItem>
                <ListItemText primary={title} />
              </ListItem>
            </Link>
          ))}
        </List>
        <div className="nav-ctas">
            <Link to="/contact">
                <Button variant="outlined">Find Us</Button>
            </Link>
            <Link to="/application">
                <Button variant="contained">Enroll</Button>
            </Link>
        </div>
      </div>
    </Toolbar>
  </AppBar>
)}

export default Header
