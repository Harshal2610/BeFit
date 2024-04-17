import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <PageNav />
      <section className={styles.section}>
        <h1>
          You Stay Fit.
          <br />
          BeFit keeps track of your nutrition.
        </h1>
        <h2>
          Your ultimate destination for achieving optimal nutrition and
          wellness! Ensuring you stay on target with your health goals. Start
          your journey to better nutrition today!
        </h2>
        <Link to="/start">
          <button className={styles.btn}>Start Tracking</button>
        </Link>
      </section>
    </div>
  );
}

export default HomePage;
