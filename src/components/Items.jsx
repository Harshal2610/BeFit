import styles from "./Items.module.css";

function Items({ data, dispatch, state }) {
  return (
    <div className={styles.container}>
      <ul className={styles.listItem}>
        {data.map((items, index) => (
          <Item
            item={items}
            key={items.calories}
            index={index}
            dispatch={dispatch}
            state={state}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, dispatch, state }) {
  function handelClick() {
    dispatch({
      type: "user/nutrientIntake",
      payload: {
        calorie: state.calorie + item.calories,
        protein: state.protein + item.protein_g,
        carbs: state.carbs + item.carbohydrates_total_g,
        fats: state.fats + item.fat_total_g,
      },
    });
  }
  return (
    <li className={styles.item} onClick={handelClick}>
      <span>{item.name}</span>
      <span>Calories: {item.calories} kcal</span>
      <div className={styles.details}>
        <span>Serving Size: {item.serving_size_g}g</span>
        <span>Carbs: {item.carbohydrates_total_g}g</span>
        <span>Protein: {item.protein_g}g</span>
        <span>Fats: {item.fat_total_g}g</span>
      </div>
    </li>
  );
}

export default Items;
