import React from 'react';
import './Footer.css';

const footerItems = [
    {
        name: "forsale.com.gh",
        link: "#"
    },
    {
        name: "FAQ",
        link: "#"
    },
    {
        name: "Privacy Policy",
        link: "#"
    },
    {
        name: "Feedback",
        link: "#"
    },
    {
        name: "Terms Of Use",
        link: "#"
    },
    {
        name: "About",
        link: "#"
    },
    {
        name: "Careers",
        link: "#"
    },
    {
        name: "Avoid Scams & Fraud",
        link: "#"
    }

]

const Footer = () => (
    <div className="footer">
        <nav className="container">
            <ul className="footer-items">
                {footerItems.map((item) => <li key={item.name} className="footer-item"><a className="footer-link" href={item.link}>{item.name}</a></li>)}
            </ul>
        </nav>
    </div>
)

export default Footer;