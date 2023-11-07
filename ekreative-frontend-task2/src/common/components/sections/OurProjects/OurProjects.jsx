import project1 from "assets/img/project1.png";
import project2 from "assets/img/project2.png";
import project3 from "assets/img/project3.png";
import {Link} from "react-router-dom";
import styles from "./OurProjects.module.scss";

const OurProjects = () => {
  return (
    <section className={styles.projects}>
      <header>
        <h2>View our projects</h2>
        <Link to="#">View More</Link>
      </header>
      <main>
        <div className={styles.project}>
          <img src={project1}
               alt="web site with heading 'We are human organisation, and operation intelligence not just artificial.'"
               height="1200"
               width="1686"/>
          <div className={`${styles.image_desc} ${styles.image_desc_1}`}>
            <h6>Workhub office Webflow Webflow Design</h6>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
            </p>
            <Link to="#">View project</Link>
          </div>
        </div>
        <div className={styles.project}>
          <img src={project2}
               alt="web site with heading 'Run your Entire Customer Support Remotely'"
               height="568"
               width="828"/>
          <div className={`${styles.image_desc} ${styles.image_desc_2}`}>
            <h6>Unisaas Website Design</h6>
            <Link to="#">View project</Link>
          </div>
        </div>
        <div className={styles.project}>
          <img src={project3}
               alt="web site with heading 'Join our church and worship the god'"
               height="568"
               width="810"/>
        </div>
      </main>
    </section>
  );
};

export default OurProjects;