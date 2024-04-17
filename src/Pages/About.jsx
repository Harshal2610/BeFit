import PageNav from "../components/PageNav";
import styles from "./About.module.css";

function About() {
  return (
    <div>
      <PageNav />
      <section className={styles.container}>
        <div className={styles.image}></div>
        <div className={styles.about}>
          <p>
            At BeFit, we believe that true health and vitality start with the
            right nutrition. Our journey began with a simple mission: to empower
            individuals to take control of their health by making informed
            choices about what they eat. Whether you are looking to lose weight,
            gain muscle, or simply improve your overall well-being.
          </p>
          <p>
            BeFit is here to support you every step of the way. Our
            comprehensive database allows you to easily find the nutrients your
            body needs, while our intuitive tracking system helps you monitor
            your intake and progress over time.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
