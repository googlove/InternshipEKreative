import ul_bullet from "assets/icons/ul_bullet.png";
import styles from "./PricingPlans.module.scss";

const PricingPlans = () => (
  <section className={styles.pricing_plans}>
    <h2>Our Pricing Plans</h2>
    <p>
      When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life
      — without coding them.
    </p>
    <div className={styles.plans_wrapper}>
      <PricingPlan key={0} {...plans[0]}/>
      <PricingPlan key={1} {...plans[1]} className="center"/>
      <PricingPlan key={2} {...plans[2]}/>
    </div>
  </section>
);

export default PricingPlans;

const PricingPlan = ({className, price, price_desc, title, desc, features, button}) => (
  <div className={`${styles.plan} ${className === "center" && styles.center}`}>
    <header>
      <h3>{price}</h3>
      <p>{price_desc}</p>
    </header>
    <main>
      <div className={styles.desc}>
        <h6>{title}</h6>
        <p>{desc}</p>
      </div>
      <ul>
        {features.map((feature, index) => (
          <PricingLi key={index} text={feature.text} notActive={!feature.active}/>
        ))}
      </ul>
    </main>
    <footer>
      <button>{button}</button>
    </footer>
    {className === "center" && <div className={styles.background_circle}></div>}
  </div>
);


const PricingLi = ({text, notActive}) => (
  <li className={notActive ? styles.not_active : ""}>
    <img src={ul_bullet} alt="green arrow" height="41" width="32"/>
    <p>{text}</p>
  </li>
);

const plans = [
  {
    price: "$299",
    price_desc: "Per Design",
    title: "Landing Page",
    desc: "When you’re ready to go beyond prototyping in Figma.",
    features: [
      {
        text: "All limited links",
        active: true,
      },
      {
        text: "Own analytics platform",
        active: true,
      },
      {
        text: "Chat support",
        active: true,
      },
      {
        text: "Optimize hashtags",
        active: false,
      },
      {
        text: "Unlimited users",
        active: false,
      },
    ],
    button: "Get started",
  },
  {
    price: "$399",
    price_desc: "Multi Design",
    title: "Website Page",
    desc: "When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.",
    features: [
      {
        text: "All limited links",
        active: true,
      },
      {
        text: "Own analytics platform",
        active: true,
      },
      {
        text: "Chat support",
        active: true,
      },
      {
        text: "Optimize hashtags",
        active: true,
      },
      {
        text: "Unlimited users",
        active: true,
      },
    ],
    button: "Get started",
  },
  {
    price: "$499 +",
    price_desc: "Per Design",
    title: "Complex Project",
    desc: "When you’re ready to go beyond prototyping in Figma",
    features: [
      {
        text: "All limited links",
        active: true,
      },
      {
        text: "Own analytics platform",
        active: true,
      },
      {
        text: "Chat support",
        active: true,
      },
      {
        text: "Optimize hashtags",
        active: true,
      },
      {
        text: "Unlimited users",
        active: true,
      },
      {
        text: "Assist and Help",
        active: true,
      },
    ],
    button: "Contact us",
  },
];