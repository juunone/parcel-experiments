import React from "react";
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
import App from "./src/App";
import Typography from "./typrography";


// function renderApp(){
//     const App = require('./src/App').default
//     render(<App />,root)
// }

ReactDOM.render(<App />,document.getElementById("root"));

// renderApp();
// module.hot.accept(renderApp)