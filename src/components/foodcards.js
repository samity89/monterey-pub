import React from "react";

function AppetizerCard({appetizer}) {
  const {name, description} = appetizer

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

function FlatbreadCard({flatbread}) {
  const {name, description} = flatbread

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

function SammichCard({sammich}) {
  const {name, description} = sammich

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}


function BurgerCard({burger}) {
  const {name, description} = burger

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

function EntreeCard({entree}) {
  const {name, description} = entree

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

function SaladCard({salad}) {
  const {name, description} = salad

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

function KidCard({kid}) {
  const {name, description} = kid

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

function SideCard({side}) {
  const {name, description} = side

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export {AppetizerCard, FlatbreadCard, SammichCard, BurgerCard, EntreeCard, SaladCard, KidCard, SideCard};
