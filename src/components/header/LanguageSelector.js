import i18next from "i18next";
import React, { useEffect, useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { useLocation } from "react-router";


const languageMap = {
    en: { label: "English", dir: "ltr", active: true },
    fr: { label: "Français", dir: "ltr", active: true }
  };

const LanguageSelector = () => {
    const location = useLocation();
    // Ensure selected is a valid language key
    const getInitialLanguage = () => {
        const storedLanguage = localStorage.getItem("i18nextLng");
        return languageMap[storedLanguage] ? storedLanguage : "fr"; // Default to "fr" if storedLanguage is invalid
    };

    const [selected, setSelected] = useState(getInitialLanguage());

    // Change text dirrection (if needed, e.g. arab is rtl)
    useEffect(() => {
        document.body.dir = languageMap[selected].dir;
    }, [selected]);
    return (
        <NavDropdown title={languageMap[selected].label || "fr"} id="basic-nav-dropdown">
        {
            Object.keys(languageMap).map((lang, i) => {
                return (
                    <NavDropdown.Item
                        key={i}
                        onClick={() => {
                            i18next.changeLanguage(lang);
                            setSelected(lang);
                            //Reload page if current is map (for translations)
                            if(location.pathname === "/map"){
                                window.location.reload(false);
                            }
                        }}
                    >{languageMap[lang].label}</NavDropdown.Item>
                )
                
            })
        }
        </NavDropdown>
    );
}

export default LanguageSelector;