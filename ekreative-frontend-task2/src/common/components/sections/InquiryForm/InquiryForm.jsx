import inquiry_background from "assets/img/inquiry_background.png";
import {useState} from "react";
import {Link} from "react-router-dom";

import styles from "./InquiryForm.module.scss";

const InquiryForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [figmaUrl, setFigmaUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted. I promise =)");

    setName("");
    setEmail("");
    setFigmaUrl("");
  };

  return (
    <section className={styles.inquiry_form}>
      <div className={styles.left_side}>
        <img src={inquiry_background} alt="woman's hand writes notes" height="1382" width="1312"/>
        <div className={styles.left_side_wrapper}>
          <h2>Building stellar websites for early startups</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua ut enim.
          </p>
        </div>
      </div>
      <div className={styles.right_side}>
        <h5>Send inquiry</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
        <form>
          <p>
            <input type="text" id="name" placeholder=" " value={name} onChange={e => setName(e.target.value)}/>
            <label htmlFor="name">Your Name</label>
          </p>
          <p>
            <input type="email" id="email" placeholder=" " value={email} onChange={e => setEmail(e.target.value)}/>
            <label htmlFor="email">Email</label>
          </p>
          <p>
            <input type="url"
                   id="figma_url"
                   placeholder=" "
                   value={figmaUrl}
                   onChange={e => setFigmaUrl(e.target.value)}/>
            <label htmlFor="figma_url">Paste your Figma design URL</label>
          </p>
          <button onClick={handleSubmit}>Send an Inquiry</button>
        </form>
        <Link className="arrow_link" to="#">Get in touch with us</Link>
      </div>
    </section>
  );
};

export default InquiryForm;