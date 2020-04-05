import React from "react";

const IngredientList = ({ ingredients }) => {
  return (
    <section className="ingredient-list">
      <ul>
        {ingredients.map(ig => (
          <li key={ig.id}>
            <span>{ig.text}</span>
            <span>{ig.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientList;
