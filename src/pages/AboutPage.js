import React from "react";
import { useTranslation } from "react-i18next";
import CookiesPolicy from "../components/shared/cookies/CookiesPolicy";
import './AboutPage.css';

const AboutPage = () => {
    const { t } = useTranslation();
    return(
        <div id='about-page'>
            <div id='news-page-title'><h1>{t('s_about')}</h1></div>
            <div id='about-page-content'>
                <div>This website has been developed using React under the MIT lisence.</div>
                <div><b>Created by</b>: Jean-Marie Alder</div>
                <div><b>Contact email</b>: <a href="mailto:jeanmarie.alder@gmail.com">jeanmarie.alder@gmail.com</a></div>
                <div><b>Build Number</b>: %%VERSION%%</div>
                <div><CookiesPolicy></CookiesPolicy></div>
            </div>
        </div>
    )
}

export default AboutPage;