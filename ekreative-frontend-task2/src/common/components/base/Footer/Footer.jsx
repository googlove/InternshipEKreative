import {library as fontawesome} from "@fortawesome/fontawesome-svg-core";
import {faFacebook, faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Nav} from "../Nav/Nav";
import styles from "./Footer.module.scss";

fontawesome.add(faFacebook, faTwitter, faInstagram, faLinkedin);

const Footer = ({className}) => {
  return (
    <footer className={`${className} ${styles.main_footer}`}>
      <main>
        <div className={styles.top_wrapper}>
          <div className={styles.footer_about}>
            <h3 className={styles.footer_logo}>{"{"}🚌SmilaBusTime</h3>
            <p>We are always open to discuss your project and improve your online presence.</p>
          </div>
          <div className={styles.lets_talk}>
            <h2>Lets Talk!</h2>
            <p>
              We are always open to discuss your project, improve your online presence and help with your UX/UI
              design challenges.
            </p>
            <div className={styles.socials}>
              <a href="https://www.facebook.com/" title="Facebook" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon="fa-brands fa-facebook"/>
              </a>
              <a href="https://twitter.com/" title="Twitter" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon="fa-brands fa-twitter"/>
              </a>
              <a href="https://www.instagram.com/" title="Instagram" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon="fa-brands fa-instagram"/>
              </a>
              <a href="https://www.linkedin.com/" title="LinkedIn" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon="fa-brands fa-linkedin"/>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.contacts}>
          <div>
            <p>Email me at</p>
            <a href="mailto:huanmastak@gmail.com">contact@huanmastak@gmail.com</a>
          </div>
          <div>
            <p>Call us</p>
            <a href="tel:0635074716">0635074716</a>
          </div>
        </div>
      </main>
      <footer>
        <p>Copyright 2023, smilabus.vercel.pp</p>
        <Nav activeClassName={styles.active}/>
      </footer>
    </footer>
  );
};

export default Footer;
