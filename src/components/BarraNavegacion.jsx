import {MenuElements} from '../data/MenuElements'
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Container,Nav,NavDropdown,Form,FormControl,Button } from "react-bootstrap";
import {NavBar, Nav,Offcanvas} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class BarraNavegacion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar bg="light" expand={false}>
      <Container fluid>
        <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {/*}
              <Nav.Link href="/Ejercicio1">Ejercicio1</Nav.Link>
              <Nav.Link href="/Ejercicio2">Ejercicio 2</Nav.Link>
              <Nav.Link href="/Ejercicio3">Ejercicio 3</Nav.Link>
    */}
            {MenuElements.map((item) => {
            return (
/*as={Link} Para que no se realice un refresh */              
              <Nav.Link as={Link} to={item.path} role="tab">{item.title}</Nav.Link>
            );
          })}
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    );
  }
}
export default BarraNavegacion;