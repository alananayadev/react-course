import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  var x = "Alan";
return <h1>Hello My Name Is {x}</h1>;
}

ReactDOM.render(<App/>,document.querySelector("#root"));