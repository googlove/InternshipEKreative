import page_schema from "assets/img/page_schema.png";
import {Link} from "react-router-dom";
import styles from "./HomeHeader.module.scss";

const HomeHeader = () => {

  const onViewOurWorkClick = () => {
    alert("View our work");
  };

  return (
    <header className={styles.extended_header}>
      <div className={styles.left_part}>
        <h1>Building stellar websites for early startups</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
        <div className={styles.buttons_wrapper}>
          <button onClick={onViewOurWorkClick}>View our work</button>
          <Link to="/pricing">View Pricing</Link>
        </div>
      </div>
      <img src={page_schema} alt="page schema" height="362" width="638"/>
    </header>
  );
};

export default HomeHeader;