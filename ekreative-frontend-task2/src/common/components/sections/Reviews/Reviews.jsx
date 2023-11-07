import {library as fontawesome} from "@fortawesome/fontawesome-svg-core";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import review_author from "assets/img/review_author.png";
import {useState} from "react";
import styles from "./Reviews.module.scss";

fontawesome.add(faChevronLeft, faChevronRight);

const Reviews = () => {

  const [activeReviewIndex, setActiveReviewIndex] = useState(reviews.findIndex(review => review.active));

  calculateReviewPositions(activeReviewIndex);

  const onLeftArrowClick = () => {
    if (activeReviewIndex <= 0) {
      return;
    }
    setActiveReviewIndex(activeReviewIndex - 1);
  };

  const onRightArrowClick = () => {
    if (activeReviewIndex >= reviews.length - 1) {
      return;
    }
    setActiveReviewIndex(activeReviewIndex + 1);
  };

  return (
    <section className={styles.reviews}>
      <div className={styles.left_side}>
        <h3>What our clients say about us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
        </p>
      </div>
      <div className={styles.right_side}>
        {reviews.map((review, index) => (
          <Review key={index} review={review}/>
        ))}
        <div className={styles.controls}>
          <button className={styles.left_arrow} title="Previous review" onClick={onLeftArrowClick}>
            <FontAwesomeIcon icon="fa-solid fa-chevron-left"/>
          </button>
          <button className={styles.right_arrow} title="Next review" onClick={onRightArrowClick}>
            <FontAwesomeIcon icon="fa-solid fa-chevron-right"/>
          </button>
        </div>
      </div>
    </section>
  );
};

const Review = ({review}) => (
  <div className={`${styles.review} ${review.className}`}>
    <h5>{review.text}</h5>
    <div className={styles.author}>
      <img src={review.author.image} alt="review author" height="104" width="104"/>
      <div className={styles.author_wrapper}>
        <p className={styles.author_name}>{review.author.name}</p>
        <p>{review.author.position}</p>
      </div>
    </div>
  </div>
);

const calculateReviewPositions = (activeReviewIndex) => {
  reviews.forEach((review, index) => {
    if (index === activeReviewIndex) {
      review.className = styles.active_review;
    } else if (index < activeReviewIndex) {
      review.className = styles.left_review;
    } else {
      review.className = styles.right_review;
    }
  });
};

const reviews = [
  {
    text: "The best agency we’ve worked with so far. They understand our product and are able to add new features" +
      " with a great focus.",
    author: {
      image: review_author,
      name: "Jenny Wilson",
      position: "Vice President",
    },
    active: true,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque incidunt nihil voluptas? Beatae" +
      " consequatur cum et? ",
    author: {
      image: review_author,
      name: "John Doe",
      position: "Vice President2",
    },
    active: false,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolor ipsam omnis.",
    author: {
      image: review_author,
      name: "Name Surname",
      position: "Vice President3",
    },
    active: false,
  },
];

export default Reviews;