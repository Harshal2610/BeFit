import { useState } from "react";
import styles from "./Customize.module.css";

function Customize({ dispatch, setCustomise, state }) {
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fats, setFats] = useState("");

  function handelSubmit() {
    if (calories === "") return;
    dispatch({
      type: "user/nutrientIntake",
      payload: {
        calorie: state.calorie + calories,
        protein: state.protein + protein,
        carbs: state.carbs + carbs,
        fats: state.fats + fats,
      },
    });
    setCalories("");
    setProtein("");
    setCarbs("");
    setFats("");
    setCustomise(false);
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handelSubmit}>
        <label>Calories:</label>
        <input
          type="number"
          placeholder="Calories"
          value={calories}
          onChange={(e) => setCalories(Number(e.target.value))}
        />
        <label>Protein:</label>
        <input
          type="number"
          placeholder="Protein"
          value={protein}
          onChange={(e) => setProtein(Number(e.target.value))}
        />
        <label>Carbs:</label>
        <input
          type="number"
          placeholder="Carbs"
          value={carbs}
          onChange={(e) => setCarbs(Number(e.target.value))}
        />
        <label>Fats:</label>
        <input
          type="number"
          placeholder="Fats"
          value={fats}
          onChange={(e) => setFats(Number(e.target.value))}
        />
      </form>
      <button className={styles.btn} onClick={handelSubmit}>
        Add
      </button>
    </div>
  );
}

export default Customize;
