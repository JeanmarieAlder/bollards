import React from "react";
import { useTranslation } from "react-i18next";
import CookiesPolicy from "../components/shared/cookies/CookiesPolicy";
import './AboutPage.css';
import imgAbout from "../assets/img/about_image.jpg";


const AboutPage = () => {
    const { t } = useTranslation();
    return(
        <div id='about-page'>
            <div id='news-page-title'><h1>{t('s_about')}</h1></div>
            <div id='about-page-content'>
                <div>{t('s_about_paragraph')}</div>
                <div><b>{t('s_created_by')}</b>: Jean-Marie Alder</div>
                <div><b>{t('s_contact_email')}</b>: <a href="mailto:jeanmarie.alder@gmail.com">jeanmarie.alder@gmail.com</a></div>
                <div><b>Github</b>: <a href="https://github.com/JeanmarieAlder/bollards" target="_blank" rel='noreferrer'>JeanmarieAlder/bollards</a></div>
                <div><b>{t('s_build_number')}</b>: %%VERSION%%</div>
                <img className="about-image" src={imgAbout} alt=''></img>
                <div><CookiesPolicy></CookiesPolicy></div>
            </div>
        </div>
    )
}

export default AboutPage;