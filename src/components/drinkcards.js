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

function BeerCard({beer}) {
  const {name, abv} = beer

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{abv}</p>
    </div>
  );
}

export {CocktailCard, BeerCard};
