import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { useTranslation } from 'react-i18next';
import CookiesPolicy from './CookiesPolicy';



const CustomCookieConsent = () => {
    const { t } = useTranslation();
    return(
        <div className='cookie-consent-div'>
            <CookieConsent
                location="bottom"
                buttonText="I agree."
                cookieName="CookieConsentFlag"
                style={{ background: "#e1ede3", color: "#000000" }}
                buttonStyle={{ color: "#000000", fontSize: "13px" }}
                expires={150}
                >
                {t("s_cookies_policy_banner_text")}
                <CookiesPolicy></CookiesPolicy>
            </CookieConsent>
        </div>
    )
}

export default CustomCookieConsent;