import React from "react";
import {CocktailCard, BeerCard} from "./drinkcards";

function Drinks({ cocktails, beer }) {
  const renderCocktails = cocktails.map((cocktail) => (
    <CocktailCard
      cocktail={cocktail}
      key={cocktail.name}
      />
  ))
  const renderBeer = beer.map((uniqueBeer) => (
    <BeerCard
      beer={uniqueBeer}
      key={uniqueBeer.name}
      />
  ))
  
  return (
    <div>
      <h1>Drinks</h1> 
      <h2>Cocktails</h2>
      <div id="cocktailContainer">{renderCocktails}</div>
      <h2>Draft Beer</h2>
      <div id="beerContainer">{renderBeer}</div>
    </div>
    );
}

export default Drinks;