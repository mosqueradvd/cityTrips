// const element = document.createElement("h1");  --> React
// element.innerText = "Hello, Platzi Badges";

// const container = document.getElementById("app");

// container.appendChild(element);  --> ReactDOM

// const jsx = <h1>Hola Platzi Badges</h1>;
// const element = React.createElement(
//   "a",
//   { href: "https://platzi.com" },
//   "Ir a Platzi."
// );

// const name = "sasi";
// const sum = () => 3 + 3;
// const jsx = <h1>Hola, soy {__expresiones__()}</h1>;
// const jsx = <h1>Hola, soy {null}</h1>;
// const element = React.createElement("h1", {}, `Hola!, Soy ${name}`);

import React from "react"; // --> Análogo a create elements //Siempre importar React jsx
import ReactDOM from "react-dom"; // --> Análogo a AppendChild
import { HashRouter, Route, Link, Switch } from "react-router-dom";

import Home from "./pages/Home";

import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
import App from "./components/App";

export default () => {
  <HashRouter>
    <Switch>
      <Route exact path="/cityTrips" component={Home} />
    </Switch>
  </HashRouter>;
};
// const element = React.createElement(
//   "div",
//   {},
//   React.createElement("h1", {}, "Hola!"),
//   React.createElement("p", {}, "Soy Ingeniero Frontend")
// );
const container = document.getElementById("app");
ReactDOM.render(<App />, container);

// ReactDOM.render(__qué__, __dónde__)
