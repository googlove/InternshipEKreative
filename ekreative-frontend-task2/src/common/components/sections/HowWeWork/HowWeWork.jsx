import {Link} from "react-router-dom";
import styles from "./HowWeWork.module.scss";

const HowWeWork = () => {
  return (
    <section className={styles.how_we_work}>
      <div className={styles.left_side}>
        <h2>How we work</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
        <Link to="#">Get in touch with us</Link>
      </div>
      <div className={styles.cards_wrapper}>
        {cards.map((card, index) => (
          <Card key={index} icon={card.icon} title={card.title} text={card.text}/>
        ))}
      </div>
    </section>
  );
};

const CardIcon = (props) => (
  <div className={styles.card_icon}>
    <div className={styles.icon_part1}></div>
    <div className={styles.icon_part2}></div>
    <p className={styles.icon_text}>{props.children}</p>
  </div>
);

const Card = (props) => (
  <div className={styles.work_card}>
    <CardIcon>{props.icon}</CardIcon>
    <h5>{props.title}</h5>
    <p className="body2">{props.text}</p>
  </div>
);

const cards = [
  {
    icon: "01",
    title: "Strategy",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.",
  },
  {
    icon: "02",
    title: "Wireframing",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.",
  },
  {
    icon: "03",
    title: "Design",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.",
  },
  {
    icon: "04",
    title: "Development",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.",
  },
];

export default HowWeWork;