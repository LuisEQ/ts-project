import * as React from "react";
import * as ReactDOM from "react-dom";
import FirstComponent from './components/FirstComponent'
import UserComponent from './components/UserComponent'
ReactDOM.render(
  <div>
    <h1>Practica React con TypeScript</h1>
    <FirstComponent />
    <UserComponent name="Luis" age={22} address="UVAQ, Morelia, Michoacán, 5200" dob={new Date()} />
    <UserComponent name="Miguel" age={22} address="CDMX, México, 1200" dob={new Date()} />

  </div>,
  document.getElementById("root")
);

