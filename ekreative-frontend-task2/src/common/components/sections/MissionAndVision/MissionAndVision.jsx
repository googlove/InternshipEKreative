import our_mission from "assets/img/our_mission.png";
import our_vision from "assets/img/our_vision.png";
import styles from "./MissionAndVision.module.scss";

const MissionAndVision = () => (
  <section className={styles.mission_and_vision}>
    <article>
      <div className={styles.text_wrapper}>
        <p className={styles.pre_header}>Our Mission</p>
        <h3>Inspire, Innovate, Share</h3>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <img src={our_mission} alt="A man smiling in front of a team meeting" height="672" width="1030"/>
    </article>
    <article>
      <img src={our_vision} alt="Four people at team meeting" height="668" width="1028"/>
      <div className={styles.text_wrapper}>
        <p className={styles.pre_header}>Our Vision</p>
        <h3>Laser focus</h3>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </article>
  </section>
);

export default MissionAndVision;