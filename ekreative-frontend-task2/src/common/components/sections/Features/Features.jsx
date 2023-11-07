import checkmark from "assets/icons/checkmark.png";
import notes from "assets/icons/notes.png";
import people from "assets/icons/people.png";
import stopwatch from "assets/icons/stopwatch.png";
import support from "assets/icons/support.png";
import tools from "assets/icons/tools.png";
import styles from "./Features.module.scss";

const Features = () => {
  return (
    <section className={styles.features}>
      <p>Features</p>

      <h2>Design that solves problems, one product at a time</h2>

      <div className={styles.cards_wrapper}>
        {cards.map((card, index) => (
          <Card key={index} icon={card.icon} title={card.title} text={card.text}/>
        ))}
      </div>
    </section>
  );
};

const Card = (props) => (
  <div className={styles.card}>
    <img src={props.icon} alt={props.title}/>
    <h6>{props.title}</h6>
    <p>{props.text}</p>
  </div>
);

const cards = [
  {
    icon: people,
    title: "Uses Client First",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. "
      + "Pellentesque et velit aliquam sed mi.",
  },
  {
    icon: checkmark,
    title: "Two Free Revision Round",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. "
      + "Pellentesque et velit aliquam sed mi.",
  },
  {
    icon: tools,
    title: "Template Customization",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. "
      + "Pellentesque et velit aliquam sed mi.",
  },
  {
    icon: support,
    title: "24/7 Support",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. "
      + "Pellentesque et velit aliquam sed mi.",
  },
  {
    icon: stopwatch,
    title: "Quick Delivery",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. "
      + "Pellentesque et velit aliquam sed mi.",
  },
  {
    icon: notes,
    title: "Hands-on approach",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. "
      + "Pellentesque et velit aliquam sed mi.",
  },
];

export default Features;