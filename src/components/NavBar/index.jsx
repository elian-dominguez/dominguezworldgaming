// import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import './style.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from '../CartWidget'

const NavBar = () => {
  return (
      <Navbar collapseOnSelect expand="lg" className='colorNav' variant="dark">
          <Container>
              <Navbar.Brand href="#home">World Gaming</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link href="#features">PC</Nav.Link>
                      <Nav.Link href="#pricing">PlayStation</Nav.Link>
                      <Nav.Link href="#pricing">Xbox</Nav.Link>
                      <Nav.Link href="#pricing">Nintendo</Nav.Link>
                      <NavDropdown title="Juegos" id="collasible-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">Acción</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Deportes</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Aventura</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.4">Otros</NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
                  <Nav>
                      <CartWidget/>
                      {/* <Nav.Link eventKey={2} href="#memes">
                          Dank memes
                      </Nav.Link> */}
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  )
}

export default NavBar