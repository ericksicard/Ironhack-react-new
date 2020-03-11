import React from 'react';
import logo from './logo.svg';
import './App.css';
import logo from '../public'


function App() {
  const statement = <h1> React is cool! </h1>;
  const student = {
    firstName: 'erick',
    lastName: 'sicard'
  };
  const { firstName, lastName } = student;
  
  function capitalizeFirstLetter() {
    return `I have capitalized first letters: ${firstName[0].toUpperCase() +
      firstName.slice(1)} ${lastName[0].toUpperCase() + lastName.slice(1)}!`;
  }

  return (
    <div className="App">
      {statement}
      <h3>
        Hi, {firstName} {lastName}!
      </h3>
      <h4>
        Here is uppercased: {firstName.toUpperCase()} {lastName.toUpperCase()}.
      </h4>
      <h4>{capitalizeFirstLetter()}</h4>
    </div>
  );
}

export default App;
