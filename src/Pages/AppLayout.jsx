import { useReducer, useState } from "react";
import styles from "./AppLayout.module.css";
import { useDetails } from "../contexts/DetailsContext";
import SideBar from "../components/SideBar";
import Main from "../components/Main";

const initialUserIntake = {
  calorie: 0,
  protein: 0,
  carbs: 0,
  fats: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "user/nutrientIntake":
      return {
        ...state,
        calorie: action.payload.calorie,
        protein: action.payload.protein,
        carbs: action.payload.carbs,
        fats: action.payload.fats,
      };
    default:
      return state;
  }
}

function AppLayout() {
  const { detail, nutrient } = useDetails();
  const [state, dispatch] = useReducer(reducer, initialUserIntake);
  console.log(detail);
  console.log(nutrient);
  return (
    <div className={styles.container}>
      <SideBar detail={detail} nutrient={nutrient} state={state} />
      <Main dispatch={dispatch} state={state} />
    </div>
  );
}

export default AppLayout;
