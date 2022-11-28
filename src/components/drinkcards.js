import React from "react";

function CocktailCard({cocktail}) {
  const {name, ingredients} = cocktail

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{ingredients}</p>
    </div>
  );
}

export {CocktailCard};
