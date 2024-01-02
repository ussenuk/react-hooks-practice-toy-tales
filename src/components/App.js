import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);
  const [formData, setFormData] = useState({
    name:"",
    image:"",
    likes: 0,
  })

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  

  function handleChange(event){
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]:value,
    });
  }

  // function handleAddToy(newItem){
  //   setToys([...toys, newItem]);
  // }

  function handleSubmit(event){
    event.preventDefault();
    const newToy ={
      name: formData.name,
      image: formData.image,
      likes: formData.likes
    };

    //add the new iem to the toys list

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(newToy),

    })
    .then((r) => r.json())
    .then ((newItem) => setToys([...toys, newItem]))
    // console.log(formData);

  }


  useEffect(()=>{
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then( (data) => setToys(data))
  },[]);

  


  return (
    <>
      <Header />
      {showForm ? <ToyForm formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} setToys={setToys}/>
    </>
  );
}

export default App;
