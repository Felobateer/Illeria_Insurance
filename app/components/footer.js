'use client'
import styles from "../styles";
import ContactForm from "./contact-form";
import DropdownMenu from "./dropdown-menu";
import CustomModal from "./modal";
import { useState } from "react";


export default function Footer() {
    const [showContact, setShowContact] = useState(false);
    const [showPolicy, setShowPolicy] = useState(false);


    return (
        <footer className={styles.footer.container}>
        <div className={styles.footer.content}>
            <p className={styles.footer.text}>copyright © 2025 Wagdy Saadalla (David). All rights reserved.</p>
            <div className={styles.footer.socialIcons}>
                <a href="#" className={styles.footer.icon}>Member Login</a>
                <a href="#" className={styles.footer.icon} onClick={() => setShowPolicy(!showPolicy)}>Privacy Policy</a>
                <button href="#" onClick={() => setShowContact(!showContact)} className={styles.footer.icon}>Contact</button>
                <CustomModal isOpen={showContact} onClose={() => setShowContact(false)}>
                    <ContactForm />
                </CustomModal>
                <CustomModal isOpen={showPolicy} onClose={() => setShowPolicy(false)}>
                    <div className={styles.footer.policyContent}>
                        <h2 className={styles.footer.title}>Privacy Policy</h2>
                        <p className={styles.footer.description}>
                        wagdy1975 is determined to protect the information that you provide. When you volunteer your information, it is stored on a secure server which is only accessed by a select group of wagdy1975 employees.
                        <br />
                        This information is used solely for assessing customer requirements for insurance purposes, updating existing policies, or to apply requisite information to an application.
                        <br />
                        wagdy1975 will also inactively collect non-identifiable personal data which is used for the purpose of improving the customer usability and overall quality of our website.
                        <br />
                        Once you enter your details and submit the wagdy1975 form, you thereby agree to the terms of this privacy policy. If you don’t agree to any of these terms, please do not submit your details to wagdy1975 or use this website.
                        <br />
                        wagdy1975 will reserve the right to make changes to this privacy policy as required. It is up to the client to regularly refer to this page and check for alterations or modifications in order to familiarize themselves with wagdy1975 current practices. wagdy1975 will always state policy changes on this page. The laws of the state of NJ and the United States of America govern any legal obligation under this privacy policy, regardless of where the user is at the time of viewing this website.
                        <br />
                        Please remember that it is essential when purchasing a policy from wagdy1975 that your details should be given to the insurance company, so that they may start the proceedings with the service.
                        <br />
                        It is possible that wagdy1975 will use third party services when completing your order or for the purpose of validating your application. This is solely in order to provide you with this service and is essential to your application.
                        <br />
                        These third parties are prohibited by law from sharing your personal information or using it to promote or market their own business.
                        <a href="https://www.inwebsitebuilder.com/directory" className={styles.aboutme.highlight}> Web Directory</a>, 
                        <a href="https://www.inwebsitebuilder.com/florida/directory" className={styles.aboutme.highlight}> New Directory</a>,
                        <a href="https://www.inwebsitebuilder.com/website/directory" className={styles.aboutme.highlight}> Website Design Directory</a>
                        </p>
                        <button onClick={() => setShowPolicy(false)} className={styles.footer.button}>Close</button>
                    </div>
                </CustomModal>
            </div>
        </div>
        </footer>
    );
}