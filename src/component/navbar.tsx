import React from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/logoBlack.png'
import Button from 'react-bootstrap/Button';
import { useNavigate} from 'react-router-dom';

function Anavbar() {
    let navigate = useNavigate();
    const routeChange = () => {
      let path = `booking`;
      navigate(path,{ state: { selected: false, reservation: '' }});
    };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="130px"
              height="30px"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/">Services</Nav.Link>
            <Button variant="dark" onClick={routeChange}>Book now</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Anavbar