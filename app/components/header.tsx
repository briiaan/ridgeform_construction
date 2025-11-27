import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import "../styles/header.scss"
 
import logo_white  from "/logo/ridgeform_white.png"
import logo_blue from "/logo/ridgeform_blue.svg"
import menu_white from "/assets/menu_white.svg"
import menu_blue from "/assets/menu_blue.svg"


export default function Header({isHome}) {
    const [windowSize, setWindowSize] = useState(null);
    const [isMobile, setIsMobile] = useState(null)
    const [menuPressed, setMenuPressed] = useState(false)

    const nav_mobile_menu = useRef(null)

  useEffect(() => {
    if (menuPressed) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }
    // Cleanup: Remove the class when the component unmounts or menuPressed changes
    return () => {
      document.documentElement.classList.remove('no-scroll');
    };
  }, [menuPressed]);

    useEffect(() => {
        if (typeof window === "undefined") return;

    const handleResize = () => {
        setWindowSize(window.innerWidth);
    };

    handleResize(); // set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (windowSize === null) return;

    const rootStyles = getComputedStyle(document.documentElement);
    const mobileBreakpoint = parseInt(
        rootStyles.getPropertyValue("--lg").trim(),
        10
    );

    setIsMobile(windowSize <= mobileBreakpoint);
    }, [windowSize]);

    if (isMobile === null) {
    return null; // or a lightweight placeholder/spinner if you prefer
    }

    return (
        <>
        <div id="header">
            <div id="header-grid-container">
                <div id="header-inner-container">
                    <div id="logo">
                    {
                    menuPressed
                    ? <img src={logo_white} alt="Ridgeform Logo" onClick={() => {window.location.href = "/"}}/>
                    : isHome
                    ? <img src={logo_white} alt="Ridgeform Logo" onClick={() => {window.location.href = "/"}}/>
                    : <img src={logo_blue} alt="Ridgeform Logo" onClick={() => {window.location.href = "/"}}/>
                    }
                    </div>
                    {/* Nav bar desktop */}
                    { !isMobile ? 
                    <div id="navbar">
                        <div id="projects-container" className={isHome ? 'navbar-link' : 'navbar-link-blue'}>
                            <Link to="/projects" prefetch="intent">Projects</Link>
                        </div>
                        <div id="about-container" className={isHome ? 'navbar-link' : 'navbar-link-blue'}>
                            <Link to="/about" prefetch="intent">Company</Link>
                        </div>
                        <div id="services-container" className={isHome ? 'navbar-link' : 'navbar-link-blue'}>
                            <Link to="/services" prefetch="intent">Services</Link>
                        </div>
                        <div id="contact-container" className={isHome ? 'navbar-link' : 'navbar-link-blue'}>
                            <Link to="/contact" prefetch="intent">Contact</Link>
                        </div>
                        <div id="bidding-hero-container" className="navbar-link">
                            <div id="bidding-hero-inner-container">
                                <a href="" target="_blank" rel="noopener noreferrer">Active RFPs</a>
                            </div>
                        </div>
                    </div> 
                    :
                    <div id="mobile-nav">
                        <div id="menu-button-container">
                        <div id="menu-button" className="shown">
                                    { 
                                    !menuPressed ?
                                    isHome 
                                    ? <img src={menu_white} alt="Menu Button" onClick={() => {menuPressed ? setMenuPressed(false) : setMenuPressed(true)}}/> 
                                    : <img src={menu_blue} alt="Menu Button" onClick={() => {menuPressed ? setMenuPressed(false) : setMenuPressed(true)}}/> 
                                    : <div id="menu-button-x" onClick={() => {menuPressed ? setMenuPressed(false) : setMenuPressed(true)}} className="unselectable">X</div>
                                    }
                            </div>
                            </div>
                        { menuPressed ?
                            <div id="mobile-menu">
                                <div id="mobile-menu-inner-container">
                                    <div id="mobile-menu-inner-container-inner">
                                        <div id="projects-link-mobile" className="link-mobile-not-last">
                                                <Link to="/projects" prefetch="intent" onClick={() => {menuPressed ? setMenuPressed(false) : setMenuPressed(true)}}>Projects</Link>
                                            </div>
                                            <div className="menu-line">
                                                </div>
                                                <div id="about-link-mobile" className="link-mobile-not-last link-mobile-not-first">
                                                <Link to="/about" prefetch="intent" onClick={() => {menuPressed ? setMenuPressed(false) : setMenuPressed(true)}}>Company</Link>
                                            </div>
                                                <div className="menu-line">
                                                </div>
                                                <div id="services-link-mobile" className="link-mobile-not-last link-mobile-not-first">
                                                <Link to="/services" prefetch="intent" onClick={() => {menuPressed ? setMenuPressed(false) : setMenuPressed(true)}}>Services</Link>
                                            </div>
                                                <div className="menu-line">
                                                </div>
                                                <div id="contact-link-mobile" className="link-mobile-not-last link-mobile-not-first">
                                                <Link to="/contact" prefetch="intent" onClick={() => {menuPressed ? setMenuPressed(false) : setMenuPressed(true)}}>Contact</Link>
                                            </div>
                                            <div className="menu-line">
                                                </div>
                                                <div id="biddinghero-link-mobile" className="link-mobile-not-first">
                                                <Link to="" prefetch="intent">Active RFPs</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : null

                    }
                        </div>
                    }
                </div>
            </div>
        </div>
        </>
    )
}