import React from "react";
import "../styles/Footer.css";
import bdtsLogo from "../assets/BDTS.jpeg";

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <p>&copy; {new Date().getFullYear()} BRAGNI Tech Pvt Ltd. All rights reserved.</p>

                <div className="designed-by">
                    <p className="text-sm">
                        Designed and Developed by 
                        &nbsp;
                        <img src={bdtsLogo} alt="BDTS Logo" className="footer-logo" />
                        <span className="footer-text"> BDTS</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
