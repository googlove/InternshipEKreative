"use strict";

const questions = document.querySelectorAll(".faq .question");
const reviews = document.querySelectorAll(".reviews .review");

/*
  Questions tab
 */
document.querySelectorAll(".faq .open_sign").forEach((open_sign) => {
  open_sign.addEventListener("click", () => {
    const currentQuestion = open_sign.closest(".faq .question");

    questions.forEach((question) => {
      if (currentQuestion !== question) {
        question.classList.remove("open_answer");
      }
    });
    currentQuestion.classList.toggle("open_answer");
  });
});

/*
  Reviews slider
 */
document.querySelector(".reviews .controls .right_arrow").addEventListener("click", () => {

  const currentReview = document.querySelector(".reviews .review.active_review");

  if (Array.from(reviews).indexOf(currentReview) === reviews.length - 1) {
    return;
  }
  moveReviews(currentReview.nextElementSibling);
});

document.querySelector(".reviews .controls .left_arrow").addEventListener("click", () => {

  const currentReview = document.querySelector(".reviews .review.active_review");

  if (Array.from(reviews).indexOf(currentReview) === 0) {
    return;
  }
  moveReviews(currentReview.previousElementSibling);
});

/**
 * Function don't validate newActiveReview position. It must be next or previous element of current active review.
 *
 * @param {Element} newActiveReview - html new active review
 */
function moveReviews(newActiveReview) {
  const activeReviewIndex = Array.from(reviews).indexOf(newActiveReview);
  const leftReviews = Array.from(reviews).slice(0, activeReviewIndex);
  const rightReviews = Array.from(reviews).slice(activeReviewIndex + 1);

  for (const review of leftReviews) {
    review.classList.add("left_review");
    review.classList.remove("active_review");
  }
  newActiveReview.classList.remove("left_review");
  newActiveReview.classList.remove("right_review");
  newActiveReview.classList.add("active_review");

  for (const review of rightReviews) {
    review.classList.remove("active_review");
    review.classList.add("right_review");
  }
}