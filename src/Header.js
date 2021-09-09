import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './Header.css';

const Header = () => {
    const [expanded, setExpanded] = useState(false);
    return (
        <Navbar bg="light" expand="lg" expanded={expanded}>
            <Container>
                <LinkContainer to="/home" onClick={() => setExpanded(false)}>
                    <Navbar.Brand>bollards.ch</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to="/list" onClick={() => setExpanded(false)}>
                        <Nav.Link>List</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/map" onClick={() => setExpanded(false)}>
                        <Nav.Link>Map</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/news" onClick={() => setExpanded(false)}>
                        <Nav.Link>News</Nav.Link>
                    </LinkContainer>                 
                </Nav>
                <Nav className="justify-content-end">
                    <LinkContainer to="/about" onClick={() => setExpanded(false)}>
                            <Nav.Link disabled>About</Nav.Link>
                    </LinkContainer> 
                    <LinkContainer to="/contact" onClick={() => setExpanded(false)}>
                        <Nav.Link disabled>Contact</Nav.Link>
                    </LinkContainer> 
                    <NavDropdown title="English" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#fr">Français</NavDropdown.Item>
                        <NavDropdown.Item href="#en">English</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;