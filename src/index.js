import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import reportWebVitals from './reportWebVitals';
import Card from './components/Card';

ReactDOM.render(
  <React.StrictMode>
    <Card
      art= {require("./images/image-equilibrium.jpg")}
      name="Equilibrium #3429"
      description="Our Equilibrium collection promotes balance and calm."
      price="0.041"
      eta="3 days"
      avatar= {require("./images/image-avatar.png")}
      author="Jules Wyvern"
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
