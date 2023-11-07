import React from "react";
import {Link} from "react-router-dom";
import {Nav} from "../Nav/Nav";

import styles from "./Header.module.scss";

const Header = ({className}) => {

  const onContactUsClick = () => {
    alert("Contact us");
  };

  return (
    <header className={`${className} ${styles.main_header}`}>
      <Link className={styles.logo} to="/">{"{"}🚌SmilaBusTime</Link>
      <div className={styles.right_wrapper}>
        <Nav activeClassName={styles.active}/>
        <button className={styles.contact_us} onClick={onContactUsClick}>Contact us</button>
      </div>
    </header>
  );
};

export default Header;
