import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loaderContaier}>
      <div className={styles.loader}></div>
      <p>Loading Data...</p>
    </div>
  );
}
