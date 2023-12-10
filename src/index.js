import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {FoodContextProvider} from './context/Context.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
    <FoodContextProvider>
      <App />
    </FoodContextProvider>
  );


