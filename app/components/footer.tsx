import { Link } from "react-router"
import logo_blue from "/logo/ridgeform_blue.svg"
import "../styles/footer.scss";


export default function Footer() {

    return(
        <>
        <div id="footer">
            <div id="footer-inner">
                <div id='links-container'>
                    <div className="link-container">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="link-container">
                        <Link to="/projects">Projects</Link>
                    </div>
                    <div className="link-container">
                        <Link to="/about">Company</Link>
                    </div>
                    <div className="link-container">
                        <Link to="/services">Services</Link>
                    </div>
                    <div className="link-container">
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className="link-container">
                        <Link to="/privacy">Privacy</Link>
                    </div>
                    <div className="link-container">
                        <Link to="/terms">Terms</Link>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src={logo_blue} alt="Ridgeform Logo" onClick={() => {window.location.href = "/"}}/>
                    </div>
            </div>
            <div>
                <div>
                    <p>
                    © Ridgeform Construction<br/>All Rights Reserved 
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}