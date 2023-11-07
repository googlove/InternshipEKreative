import notes from "assets/icons/notes.png";
import partner1 from "assets/icons/partner1.png";
import partner2 from "assets/icons/partner2.png";
import partner3 from "assets/icons/partner3.png";
import partner4 from "assets/icons/partner4.png";
import partner5 from "assets/icons/partner5.png";
import people from "assets/icons/people.png";
import tools from "assets/icons/tools.png";
import styles from "./OurBenefits.module.scss";

const OurBenefits = () => (
  <section className={styles.our_benefits}>
    <h2>The benefits of working with us</h2>
    <div className={styles.cards_wrapper}>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
    <div className={styles.partners}>
      <div className={styles.users}>
        <h3>100.000+</h3>
        <p>Finsweet Users</p>
      </div>
      <div className={styles.partners_wrapper}>
        {partners.map((partner, index) => (
          <Partner key={index} {...partner} />
        ))}
      </div>
    </div>
  </section>
);

export default OurBenefits;

const Card = ({icon, title, text}) => (
  <div className={styles.card}>
    <img src={icon.src} alt={icon.desc}/>
    <h6>{title}</h6>
    <p>{text}</p>
  </div>
);

const Partner = ({logo, name}) => (
  <div className={styles.partner}>
    <img src={logo.src} alt={logo.desc}/>
    <p>{name}</p>
  </div>
);

const cards = [
  {
    icon: {
      src: notes,
      desc: "notes icon",
    },
    title: "Customize with ease",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
      + " dolore magna aliqua ut enim.",
  },
  {
    icon: {
      src: tools,
      desc: "tools icon",
    },
    title: "Perfectly Responsive",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
      + " dolore magna aliqua ut enim.",
  },
  {
    icon: {
      src: people,
      desc: "people icon",
    },
    title: "Friendly Support",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
      + " dolore magna aliqua ut enim.",
  },
];

const partners = [
  {
    logo: {
      src: partner1,
      desc: "logoipsum logo",
    },
    name: "logoipsum˙",
  },
  {
    logo: {
      src: partner2,
      desc: "logoipsum logo",
    },
    name: "logoipsum˙",
  },
  {
    logo: {
      src: partner3,
      desc: "logoipsum logo",
    },
    name: "logoipsum",
  },
  {
    logo: {
      src: partner4,
      desc: "logoipsum logo",
    },
    name: "logoipsum",
  },
  {
    logo: {
      src: partner5,
      desc: "logoipsum logo",
    },
    name: "logoipsum",
  },
];