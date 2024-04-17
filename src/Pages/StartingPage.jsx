import { useState, useReducer } from "react";
import styles from "./StartingPage.module.css";
import { useDetails } from "../contexts/DetailsContext";
import { redirectDocument, useNavigate } from "react-router-dom";

import { RAPID_APIKEY } from "../../apikey";

const initialState = {
  name: "",
  email: "",
  password: "",
  age: null,
  gender: "male",
  height: null,
  weight: null,
  actLvl: 1,
  goal: "maintain",
};

function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload };
    case "setEmail":
      return { ...state, email: action.payload };
    case "setPassword":
      return { ...state, password: action.payload };
    case "setAge":
      return { ...state, age: action.payload };
    case "setGender":
      return { ...state, gender: action.payload };
    case "setHeight":
      return { ...state, height: action.payload };
    case "setWeight":
      return { ...state, weight: action.payload };
    case "setActivityLevel":
      return { ...state, actLvl: action.payload };
    case "setGoal":
      return { ...state, goal: action.payload };
    case "submit":
      return {
        ...state,
        name: "",
        email: "",
        password: "",
        age: 0,
        gender: "male",
        height: 0,
        weight: 0,
        actLvl: 1,
        goal: "maintain",
        isAutheticated: "false",
      };
    default:
      throw new Error("Unknown error");
  }
}

function StartingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    name,
    email,
    password,
    age,
    gender,
    height,
    weight,
    goal,
    actLvl,
    isAuthenticated,
  } = state;
  const { getDetails } = useDetails();
  const navigate = useNavigate();

  function handelSubmit(e) {
    e.preventDefault();
  }

  function handelClick() {
    if (
      !name &&
      !email &&
      !password &&
      age === null &&
      height === null &&
      weight === null
    )
      return;
    const details = {
      name,
      email,
      password,
      age,
      gender,
      height,
      weight,
      actLvl,
      goal,
      isAuthenticated: "true",
    };
    // console.log(details);
    async function getData() {
      const url = `https://fitness-calculator.p.rapidapi.com/macrocalculator?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${actLvl}&goal=${goal}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": RAPID_APIKEY,
          "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        getDetails(details, result);
        setIsLoading(true);
        console.log(result);
        console.log(details);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
    dispatch({ type: "submit" });
    // if (!isLoading) navigate("/app");    This will not work as i have to take event and than do it
    // setAge(0);
    // setGender("male");
    // setName("");
  }
  return (
    <section className={styles.container}>
      <h1>Enter Your Details</h1>
      <form className={styles.form} onSubmit={handelSubmit}>
        <div className={styles.left}>
          <div className={styles.row}>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) =>
                dispatch({ type: "setName", payload: e.target.value })
              }
            />
          </div>
          <div className={styles.row}>
            <label>Email:</label>
            <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) =>
                dispatch({ type: "setEmail", payload: e.target.value })
              }
            />
          </div>
          <div className={styles.row}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) =>
                dispatch({ type: "setPassword", payload: e.target.value })
              }
            />
          </div>
          <div className={styles.row}>
            <label>Age: </label>
            <input
              type="number"
              value={age}
              placeholder="Age"
              onChange={(e) =>
                dispatch({ type: "setAge", payload: Number(e.target.value) })
              }
            />
          </div>
          <div className={styles.row}>
            <label>Gender:</label>
            <select
              value={gender}
              onChange={(e) =>
                dispatch({ type: "setGender", payload: e.target.value })
              }
            >
              <option value={"male"}>Male</option>
              <option value={"female"}>Female</option>
            </select>
          </div>
          <button
            className={styles.btn}
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            &larr; Back
          </button>
        </div>
        <div className={styles.right}>
          <div className={styles.row}>
            <label>
              Height<span> (in cm)</span>:{" "}
            </label>
            <input
              type="number"
              value={height}
              placeholder="Height"
              onChange={(e) =>
                dispatch({
                  type: "setHeight",
                  payload: Number(e.target.value),
                })
              }
            />
          </div>
          <div className={styles.row}>
            <label>
              Weight<span> (in Kg)</span>:
            </label>
            <input
              type="number"
              value={weight}
              placeholder="Weight"
              required
              onChange={(e) =>
                dispatch({
                  type: "setWeight",
                  payload: Number(e.target.value),
                })
              }
            />
          </div>
          <div className={styles.row}>
            <label>Physical Activity:</label>
            <select
              value={actLvl}
              onChange={(e) =>
                dispatch({
                  type: "setActivityLevel",
                  payload: Number(e.target.value),
                })
              }
            >
              <option value={1}>Very Low</option>
              <option value={2}>Low</option>
              <option value={3}>Moderate</option>
              <option value={4}>High</option>
              <option value={5}>Extreme</option>
            </select>
          </div>
          <div className={styles.row}>
            <label>Goal:</label>
            <select
              value={goal}
              onChange={(e) =>
                dispatch({ type: "setGoal", payload: e.target.value })
              }
            >
              <option value={"maintain"}>Maintain</option>
              <option value={"mildlose"}>Mildlose</option>
              <option value={"weightlose"}>Weightlose</option>
              <option value={"extremelose"}>Extremelose</option>
              <option value={"mildgain"}>Mildgain</option>
              <option value={"weightgain"}>Weightgain</option>
              <option value={"extremegain"}>Extremegain</option>
            </select>
          </div>
          <button className={styles.btn} onClick={handelClick}>
            submit
          </button>
          <span>* Please fill all the details.</span>
        </div>
      </form>

      <button
        disabled={!isLoading}
        className={`${styles.btn} ${styles.start}`}
        onClick={(e) => navigate("/app")}
      >
        Start
      </button>
    </section>
  );
}

export default StartingPage;
