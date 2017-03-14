import React from "react";
import {Link} from "react-router";

class FooterComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <footer id="footer">
                <div className="footer-container">
                    <div className="footer-logo">
                        <img className="logo-lilly" src="svg/logos/logo_lilly.svg" alt="Lilly"/> &copy; 2016 Eli Lilly.
                        All rights reserved. Job code UKRHM00004n November 2016
                    </div>
                    <nav className="footer-nav">
                        <ul className="footer-nav-ul">
                            <li>
                                <Link to="privacy-policy">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="copyright">Copyright</Link>
                            </li>
                            <li>
                                <Link to="terms-and-conditions">Terms of Use</Link>
                            </li>
                            <li>
                                <Link to="glossary">Glossary</Link>
                            </li>
                            <li>
                                <Link to="contact-us">Contact us</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        );

    }
}

export default FooterComponent;