import { useState } from "react";
import styles from "./Main.module.css";
import $ from "jquery";
import Loader from "./Loader";
import Items from "./Items";
import Customize from "./Customize";
import { NUTRITION_APIKEY } from "../../apikey";

function Main({ dispatch, state }) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [customise, setCustomise] = useState(false);
  function handelFetch(e) {
    if (query === "") return;
    e.preventDefault();
    setIsLoading(true);
    $.ajax({
      method: "GET",
      url: "https://api.api-ninjas.com/v1/nutrition?query=" + query,
      headers: { "X-Api-Key": NUTRITION_APIKEY },
      contentType: "application/json",
      success: function (result) {
        setData(result);
        setIsLoading(false);
        console.log(result);
      },
      error: function ajaxError(jqXHR) {
        console.error("Error: ", jqXHR.responseText);
      },
    });
    setQuery("");
  }
  return (
    <section className={styles.container}>
      <form onSubmit={handelFetch}>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Serach Food item......"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className={styles.btn}>Search</button>
        </div>
      </form>
      {isLoading && <Loader />}
      <Items data={data} dispatch={dispatch} state={state} />
      {!customise ? (
        <button
          onClick={() => setCustomise(true)}
          className={`${styles.btn} ${styles.customizeBtn}`}
        >
          Customise
        </button>
      ) : (
        <Customize
          dispatch={dispatch}
          setCustomise={setCustomise}
          state={state}
        />
      )}
    </section>
  );
}

export default Main;
