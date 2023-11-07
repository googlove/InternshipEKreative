import {library as fontawesome} from "@fortawesome/fontawesome-svg-core";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import styles from "./Faq.module.scss";

fontawesome.add(faPlus);

const Faq = () => {

  const onPlusClick = (index) => {
    const faq = document.querySelector(`#faq-${index}`);
    const openFaqs = document.querySelectorAll(`.${styles.open_answer}:not(#faq-${index})`);

    openFaqs.forEach(faq => faq.classList.remove(styles.open_answer));
    faq.classList.toggle(styles.open_answer);
  };

  const FaqItem = ({faq, index}) => (
    <div className={`${styles.question} ${index === 0 && styles.open_answer}`} id={`faq-${index}`}>
      {index !== 0 && <hr/>}
      <div className={styles.question_wrapper}>
        <h6>{index < 9 ? `0${index + 1}` : index + 1}</h6>
        <div className={styles.answer_wrapper}>
          <h6>{faq.question}</h6>
          <p className={styles.answer}>{faq.answer}</p>
          <div className={styles.open_sign} role="button" onClick={() => onPlusClick(index)}>
            <FontAwesomeIcon icon="fa-solid fa-plus"/>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className={styles.faq}>
      <div className={styles.left_side}>
        <h3>Frequently asked questions</h3>
        <Link to="#">Contact us for more info</Link>
      </div>
      <div className={styles.right_side}>
        {faqs.map((faq, index) => (
          <FaqItem key={index} faq={faq} index={index}/>
        ))}
      </div>
    </section>
  );
};


const faqs = [
  {
    question: "How much time does it take?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" +
      " dolore magna aliqua.",
  },
  {
    question: "What is your class naming convention?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" +
      " dolore magna aliqua.",
  },
  {
    question: "How do you communicate?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" +
      " dolore magna aliqua.",
  },
  {
    question: "I have a bigger project. Can you handle it?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" +
      " dolore magna aliqua.",
  },
  {
    question: "What is your class naming convention?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" +
      " dolore magna aliqua.",
  },
];

export default Faq;