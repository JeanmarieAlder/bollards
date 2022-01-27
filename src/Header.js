import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import LanguageSelector from './components/header/LanguageSelector';
import { useTranslation } from "react-i18next";

import './Header.css';

const Header = ({fixed}) => {
    const { t } = useTranslation();
    const [expanded, setExpanded] = useState(false);
    const onClickToList = () => {
        setExpanded(false);
        sessionStorage.removeItem("scroll-position-bollard-id");
    };
    useEffect(() => {
        if(fixed === ''){
            document.body.style.marginTop = '0px'
        }else{
            if(expanded){
                document.body.style.transition = 'margin 0.5s ease';
                document.body.style.marginTop = '296px';
            }else{
                document.body.style.marginTop = '56px';
            }
        }
        return () => { //component unmount
            document.body.style.marginTop = '0px'
        }
    }, [fixed, expanded])
    return (
        <Navbar bg="light" expand="lg" expanded={expanded} fixed={fixed}>
            <Container>
                <LinkContainer to="/home" onClick={() => onClickToList()}>
                    <Navbar.Brand>bollards.ch</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to="/list" onClick={() => onClickToList()}>
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
                            <Nav.Link>{t("s_about")}</Nav.Link>
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