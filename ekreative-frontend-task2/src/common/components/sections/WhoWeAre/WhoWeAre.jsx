import who_we_are from "assets/img/who_we_are.png";
import styles from "./WhoWeAre.module.scss";

const WhoWeAre = () => (
  <section className={styles.who_we_are}>
    <div className={styles.top}>
      <p>Who we are</p>
      <div className={styles.content_wrapper}>
        <article>
          <h3>Goal focussed</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </article>
        <article>
          <h3>Continuous improvement</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </article>
      </div>
    </div>
    <img src={who_we_are} alt="man describes text in board to colleagues" height="680" width="2560"/>
  </section>
);

export default WhoWeAre;