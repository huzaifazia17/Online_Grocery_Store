import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


//Redux
import { Provider } from "react-redux";
import store from "../src/CartComponents/Redux/store"; // change 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


