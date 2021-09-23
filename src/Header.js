import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import LanguageSelector from './components/header/LanguageSelector';
import { useTranslation } from "react-i18next";

import './Header.css';

const Header = () => {
    const { t } = useTranslation();
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
                        <Nav.Link>{t("s_list")}</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/map" onClick={() => setExpanded(false)}>
                        <Nav.Link>{t("s_map")}</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/news" onClick={() => setExpanded(false)}>
                        <Nav.Link>{t("s_news")}</Nav.Link>
                    </LinkContainer>                 
                </Nav>
                <Nav className="justify-content-end">
                    <LinkContainer to="/about" onClick={() => setExpanded(false)}>
                            <Nav.Link disabled>{t("s_about")}</Nav.Link>
                    </LinkContainer> 
                    <LinkContainer to="/contact" onClick={() => setExpanded(false)}>
                        <Nav.Link disabled>{t("s_contact")}</Nav.Link>
                    </LinkContainer>
                    <LanguageSelector></LanguageSelector> 
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;