import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const element = (
  <div id="parent">
    <div id="child1">
      <h1>Hello using child 1</h1>
      </div>
      <div id='child2'>
        <h1>hello using child2</h1>
      </div>
  </div>
  
);
const learn=(
<React.Fragment>
<h1>learn jsx</h1>
  <h1>learning jsx....</h1>
</React.Fragment>
);

//react fragment
//console.log("element",element);



// root.render(element);
// root.render(learn);

 root.render(
   <React.StrictMode>
     <App />
  </React.StrictMode>
 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
