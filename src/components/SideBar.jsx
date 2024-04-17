import { useNavigate } from "react-router-dom";
import styles from "./SideBar.module.css";
function SideBar({ detail, nutrient, state }) {
  const navigate = useNavigate();
  function handelLogOut() {
    navigate("/");
  }

  return (
    <div className={styles.container}>
      <h2>
        Hii {detail.name}
        <br />
        Your nutrition intake for the Day.
      </h2>
      <ul className={styles.listContainer}>
        <li>
          <span>Calories</span>{" "}
          <span>
            {Math.round(state.calorie)} kcal /{" "}
            {Math.round(nutrient.data.calorie)} kcal
          </span>
          <progress value={state.calorie} max={nutrient.data.calorie} />
        </li>
        <li>
          <span>Protein</span>{" "}
          <span>
            {Math.round(state.protein)}g /{" "}
            {Math.round(nutrient.data.balanced.protein)}g
          </span>
          <progress
            value={state.protein}
            max={nutrient.data.balanced.protein}
          />
        </li>
        <li>
          <span>Carbohydrate</span>{" "}
          <span>
            {Math.round(state.carbs)}g /{" "}
            {Math.round(nutrient.data.balanced.carbs)}g
          </span>
          <progress value={state.carbs} max={nutrient.data.balanced.carbs} />
        </li>
        <li>
          <span>Fats</span>{" "}
          <span>
            {Math.round(state.fats)}g / {Math.round(nutrient.data.balanced.fat)}
            g
          </span>
          <progress value={state.fats} max={nutrient.data.balanced.fat} />
        </li>
      </ul>
      <button className={styles.btn} onClick={handelLogOut}>
        Log Out
      </button>
    </div>
  );
}

export default SideBar;
