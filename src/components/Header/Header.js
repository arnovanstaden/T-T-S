import { Link } from "gatsby"
import React, { useState, useEffect } from "react";
import Rotate from "react-reveal/Rotate";
import classNames from "classnames";

// Styles, Images
import styles from "./header.module.scss";
import Logo from "../../assets/images/logos/logo.svg";


const Header = () => {

  const [navOpen, setNavOpen] = useState(false);

  const toggleNavHandler = () => {
    setNavOpen(!navOpen);
  }

  const MobileNav = () => {
    const navList = ["Home", "About", "Solutions", "Projects", "Contact"]
    return (
      <Rotate top right opposite>
        <div className={styles.mobileMenu}>
          <div className={styles.items}>
            {navList.map((item, index) => (
              <Link
                key={index}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => toggleNavHandler()}
              >
                {item}
              </Link>
            ))}
          </div>
          <div className={styles.circle}></div>
        </div>
      </Rotate>
    )
  }


  const buttonClasses = classNames(
    styles.mobileButton,
    navOpen && styles.open
  )


  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.brand}>
          <img src={Logo} alt="Together Through Skills Navbar Logo" />
          <p>Together <span>Through</span> Skills</p>
        </Link>
        <div className={styles.menu}>
          <Link to="/">
            Home
          </Link>
          <Link to="/about">
            About
          </Link>
          <Link to="/solutions">
            Solutions
          </Link>
          <Link to="/projects">
            Projects
          </Link>
          <Link to="/contact">
            Contact
          </Link>
        </div>
        {navOpen ? <MobileNav /> : null}
        <div className={buttonClasses} onClick={() => toggleNavHandler()}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </header>
  )
}


export default Header
