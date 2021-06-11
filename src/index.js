import React from 'react';
import ReactDOM from 'react-dom';
import "modern-normalize/modern-normalize.css";
import './index.css';
import { v4 as uuidv4 } from "uuid";
import App from "./components/form/Form";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

