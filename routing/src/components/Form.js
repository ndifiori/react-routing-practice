import React, { useState } from 'react'

function Form(){

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${name}, you are ${age} years old.`);
  };

  return (
    <form>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Age:
        <input type="number" value={age} onChange={handleAgeChange} />
      </label>
      <button type="submit" onClick={handleSubmit}> Submit </button>
    </form>
  )
}

export default Form
