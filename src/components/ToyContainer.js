import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, setToys}) {


function handleDeleteToy(deletedToy){
  const updatedToys = toys.filter((toy)=> toy.id !== deletedToy.id);
  setToys(updatedToys);
}

function handleUpdateToy(updatedToy){
  const updatedToys = toys.map((toy)=>{
    if (toy.id === updatedToy.id){
      return updatedToy;
    } else {
      return toy;
    }
  });
  setToys(updatedToys);
}


 const toysToDisplay = toys.map((item)=>{
    return (
      <ToyCard
        key={item.id}
        toy={item}
        onDeleteToy={handleDeleteToy}
        onUpdateToy={handleUpdateToy}
      />
    )
  })
  return (
    <div id="toy-collection">
      {toysToDisplay}
      </div>
  );
}

export default ToyContainer;
