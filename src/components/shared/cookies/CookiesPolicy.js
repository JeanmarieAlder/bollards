import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import "./CookiesPolicy.css";

const CookiesPolicy = () => {
    const { t } = useTranslation();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return(
        <>
            <Button variant="link" onClick={handleShow}>
                {t("s_cookies_policy")}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{t("s_cookies_policy")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Please read this cookie policy (“cookie policy”, "policy") carefully before using bollards.ch website 
                            (“website”, "service") operated by JMA ("us", 'we", "our").
                            <h5>What are cookies?</h5>
                            Cookies are simple text files that are stored on your computer or mobile device by a website’s
                            server. Each cookie is unique to your web browser. It will contain some anonymous information
                            such as a unique identifier, website’s domain name, and some digits and numbers.
                            <h5>What types of cookies do we use?</h5>
                            <h6>Necessary cookies</h6>
                            Necessary cookies allow us to offer you the best possible experience when accessing and
                            navigating through our website and using its features. For example, these cookies let us
                            recognize that you have created an account and have logged into that account.
                            <h6>Functionality cookies</h6>
                            Functionality cookies let us operate the site in accordance with the choices you make. For
                            example, we will recognize your username and remember how you customized the site during
                            future visits.
                            <h6>Analytical cookies</h6>
                            These cookies enable us and third-party services to collect aggregated data for statistical
                            purposes on how our visitors use the website. These cookies do not contain personal
                            information such as names and email addresses and are used to help us improve your user
                            experience of the website.
                            <h5>How to delete cookies?</h5>
                            If you want to restrict or block the cookies that are set by our website, you can do so through
                            your browser setting. Alternatively, you can visit www.internetcookies.org, which contains
                            comprehensive information on how to do this on a wide variety of browsers and devices. You
                            will find general information about cookies and details on how to delete cookies from your
                            device.
                            <h5>Contacting us</h5>
                            If you have any questions about this policy or our use of cookies, please contact us.
                    </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CookiesPolicy;