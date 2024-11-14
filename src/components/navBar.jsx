import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Logo from '../logo'
import DarkNavBar from './darkNavBar';
import SearchBar from './searchBar'

const NavBar=()=>{
    return(
        <>
            <DarkNavBar/>
            <Navbar expand="lg" className=" nav_color">
                <Container>
                <Navbar.Brand href="#home">
                    <Logo/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        
                        <NavDropdown title="Our Products" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                            Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            
                            
                        </NavDropdown>
                        <Nav.Link href="#link">About Us</Nav.Link>
                        <Nav.Link href="#link">Contact Us</Nav.Link>
                        <Nav.Link href="#link">Spaces</Nav.Link>
                    </Nav>
                    <SearchBar/>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default NavBar