import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <>
            <div className="footer-all">
                <div className="footer-content">
                    <img
                        id="little-lemon-vertical-logo"
                        src="/images/little-lemon-vertical-logo.png"
                        alt="Little Lemon"
                    />
                    <section className="contact">
                        <h1 className="footer-name-sector">Contacts</h1>
                        <ul>
                            <li>Address: Chicago, Illinois, USA</li>
                            <li>Phone: 312-938-7229</li>
                            <li>Email: hello@littlelemon.com</li>
                        </ul>
                    </section>
                    <section className="social-media">
                        <h1 className="footer-name-sector">Social media</h1>
                        <section className="links-social-media">
                            <Link to="https://www.facebook.com">
                                <img
                                    className="social-meadia-photo"
                                    src="/images/facebook-logo-white.png"
                                    alt="Facebook"
                                />
                            </Link>
                            <Link to="https://www.instagram.com">
                                <img
                                    className="social-meadia-photo"
                                    src="/images/instagram-logo-white.png"
                                    alt="Instagram"
                                />
                            </Link>
                            <Link to="https://twitter.com">
                                <img
                                    className="social-meadia-photo"
                                    src="/images/twitter-logo-white.png"
                                    alt="Twitter"
                                />
                            </Link>
                        </section>
                    </section>
                </div>
                <div className="copyright">
                    <p>© Copyright. All rights reserved.</p>
                    <p>
                        Designed and developed by Latko Nazar for the capstone
                        project of the Meta front-end developer professional
                        certificate.
                    </p>
                </div>
            </div>
        </>
    );
}
