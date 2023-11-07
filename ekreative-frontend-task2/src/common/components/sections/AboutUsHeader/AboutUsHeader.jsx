import about_us from "assets/img/about_us.png";
import styles from "./AboutUsHeader.module.scss";

const AboutUsHeader = () => (
  <header className={styles.about_us}>
    <main>
      <p className={styles.pre_title}>About us</p>
      <h1>Our designs solve problems</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam.
      </p>
    </main>
    <img src={about_us} alt="group meeting" height="672" width="1094"/>
  </header>
);

export default AboutUsHeader;