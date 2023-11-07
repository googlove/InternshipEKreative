import {library as fontawesome} from "@fortawesome/fontawesome-svg-core";
import {faFacebook, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import team_John_Smith from "assets/img/team_John_Smith.png";
import team_Paul_Jones from "assets/img/team_Paul_Jones.png";
import team_Sara_Hardin from "assets/img/team_Sara_Hardin.png";
import team_Simon_Adams from "assets/img/team_Simon_Adams.png";
import styles from "./OurTeam.module.scss";

fontawesome.add(faFacebook, faTwitter, faLinkedin);

const OurTeam = () => (
  <section className={styles.our_team}>
    <h2>Meet our team</h2>
    <div className={styles.card_wrapper}>
      {team.map((member, index) => (
        <Card key={index} {...member}/>
      ))}
    </div>
  </section>
);

export default OurTeam;

const Card = ({name, position, image, socials}) => (
  <div className={styles.card}>
    <div className={styles.image_wrapper}>
      <img src={image.src} alt={image.description}/>
      <div className={styles.image_overlay}>
        <div className={styles.socials}>
          <a href={socials.facebook} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon="fa-brands fa-facebook"/>
          </a>
          <a href={socials.twitter} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon="fa-brands fa-twitter"/>
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon="fa-brands fa-linkedin"/>
          </a>
        </div>
      </div>
    </div>
    <h6>{name}</h6>
    <p>{position}</p>
  </div>
);

const team = [
  {
    name: "John Smith",
    position: "CEO",
    image: {
      src: team_John_Smith,
      description: "John Smith",
    },
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Simon Adams",
    position: "CTO",
    image: {
      src: team_Simon_Adams,
      description: "Simon Adams",
    },
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Paul Jones",
    position: "Design Lead",
    image: {
      src: team_Paul_Jones,
      description: "Paul Jones",
    },
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Sara Hardin",
    position: "Project Manager",
    image: {
      src: team_Sara_Hardin,
      description: "Sara Hardin",
    },
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
];
