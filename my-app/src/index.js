import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from "./components/App";
import "./components/styles/global.css";

// ReactDOM.render(myJSXElement, reactContentRoot);''

//And higher- by using react components
//This executes the function and renders the return from it
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
