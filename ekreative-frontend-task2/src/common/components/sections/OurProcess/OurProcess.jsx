import styles from "./OurProcess.module.scss";

const OurProcess = () => (
  <section className={styles.our_process}>
    <h2>The process we follow</h2>
    <div className={styles.process_wrapper}>
      {processes.map((process, index) => (
        <Process key={index} process={process}/>
      ))}
    </div>
  </section>
);

export default OurProcess;

const Process = ({process}) => (
  <div className={styles.process}>
    <div className={styles.work_line}>
      <div className={styles.circle}></div>
      <div className={styles.line}></div>
    </div>
    <h6>{process.title}</h6>
    <p>{process.description}</p>
  </div>
);

const processes = [
  {
    title: "Planning",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
    title: "Conception",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
    title: "Design",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
    title: "Development",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
];