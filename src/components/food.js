import React from "react";
import {
  AppetizerCard, 
  FlatbreadCard, 
  SammichCard, 
  BurgerCard, 
  EntreeCard,
  SaladCard,
  KidCard,
  SideCard
} from "./foodcards";

function Food (
  { 
  appetizers, 
  flatbreads, 
  sammiches, 
  burgers, 
  entrees, 
  salads, 
  kids, 
  sides }
  ) {
  
  const renderAppetizers = appetizers.map((appetizer) => (
    <AppetizerCard
      appetizer={appetizer}
      key={appetizer.name}
      />
  ))

  const renderFlatbreads = flatbreads.map((flatbread) => (
    <FlatbreadCard
      flatbread={flatbread}
      key={flatbread.name}
      />
  ))

  const renderSammiches = sammiches.map((sammich) => (
    <SammichCard
      sammich={sammich}
      key={sammich.name}
      />
  ))

  const renderBurgers = burgers.map((burger) => (
    <BurgerCard
      burger={burger}
      key={burger.name}
      />
  ))

  const renderEntrees = entrees.map((entree) => (
    <EntreeCard
      entree={entree}
      key={entree.name}
      />
  ))

  const renderSalads = salads.map((salad) => (
    <SaladCard
      salad={salad}
      key={salad.name}
      />
  ))

  const renderKids = kids.map((kid) => (
    <KidCard
      kid={kid}
      key={kid.name}
      />
  ))

  const renderSides = sides.map((side) => (
    <SideCard
      side={side}
      key={side.name}
      />
  ))
  
  return (
    <div>
      <h1>Food</h1> 
      <h2>Appetizers</h2>
      <div id="cardContainer">{renderAppetizers}</div>
      <h2>Flatbread Pizzas</h2>
      <div id="cardContainer">{renderFlatbreads}</div>
      <h2>Sammiches</h2>
      <p>served with a choice of side</p>
      <div id="cardContainer">{renderSammiches}</div>
      <h2>Smash Burgers</h2>
      <p>served with a choice of side</p>
      <div id="cardContainer">{renderBurgers}</div>
      <h2>Entrees</h2>
      <div id="cardContainer">{renderEntrees}</div>
      <h2>Salads</h2>
      <p>optionally add on chicken, salmon, or roasted vegetables</p>
      <div id="cardContainer">{renderSalads}</div>
      <h2>Lasses and Laddies</h2>
      <p>served with a choice of side</p>
      <div id="cardContainer">{renderKids}</div>
      <h2>Sides</h2>
      <div id="cardContainer">{renderSides}</div>
    </div>
    );
}

export default Food;