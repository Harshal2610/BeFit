import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

const DetailsContext = createContext();

function DetailsProvider({ children }) {
  const [detail, setDetail] = useState(function () {
    const storedDetail = localStorage.getItem("detail");
    return JSON.parse(storedDetail);
  });
  const [nutrient, setNutrient] = useState(function () {
    const storedNutrient = localStorage.getItem("nutrient");
    return JSON.parse(storedNutrient);
  });
  function getDetails(details, nutrients) {
    setDetail(details);
    setNutrient(nutrients);
  }

  useEffect(
    function () {
      localStorage.setItem("detail", JSON.stringify(detail));
      localStorage.setItem("nutrient", JSON.stringify(nutrient));
    },
    [detail, nutrient]
  );
  // useEffect(
  //   function () {
  //     localStorage.setItem("nutrient", JSON.stringify(nutrient));
  //   },
  //   [nutrient]
  // );
  return (
    <DetailsContext.Provider value={{ detail, nutrient, getDetails }}>
      {children}
    </DetailsContext.Provider>
  );
}

function useDetails() {
  const context = useContext(DetailsContext);
  if (context === undefined)
    throw new Error("Context out of the Details Provider");
  return context;
}

export { DetailsProvider, useDetails };
