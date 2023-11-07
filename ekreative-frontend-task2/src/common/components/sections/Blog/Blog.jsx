import post1 from "assets/img/post1.png";
import post2 from "assets/img/post2.png";
import post3 from "assets/img/post3.png";
import {Link} from "react-router-dom";

import styles from "./Blog.module.scss";

const Blog = () => {
  return (
    <section className={styles.blog}>
      <h2>Our blog</h2>
      <main>
        {posts.map((post, index) => (
          <Post key={index} {...post}/>
        ))}
      </main>
    </section>
  );
};

export default Blog;

const Post = ({img, date, title, desc, link}) => {
  return (
    <div className={styles.post}>
      <img src={img.src} alt={img.desc}/>
      <p className={styles.date}>{date}</p>
      <h6>{title}</h6>
      <p className={styles.desc}>{desc}</p>
      <Link to={link}>Read More</Link>
    </div>
  );
};

const posts = [
  {
    img: {
      src: post1,
      desc: "man with laptop",
    },
    date: "19 Jan 2022",
    title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    desc: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    link: "#",
  },
  {
    img: {
      src: post2,
      desc: "woman work with computer",
    },
    date: "19 Jan 2022",
    title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    desc: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    link: "#",
  },
  {
    img: {
      src: post3,
      desc: "two monitors with working programs",
    },
    date: "19 Jan 2022",
    title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    desc: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    link: "#",
  },
];