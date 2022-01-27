import React from "react";
import { useTranslation } from "react-i18next";
import './AboutPage.css';

const AboutPage = () => {
    const { t } = useTranslation();
    return(
        <div id='about-page'>
            <div id='news-page-title'><h1>{t('s_about')}</h1></div>
            <div id='about-page-content'>
                Build Number: %%VERSION%%
            </div>
        </div>
    )
}

export default AboutPage;