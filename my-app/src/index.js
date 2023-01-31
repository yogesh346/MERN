import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App/App";
import { Provider } from "react-redux";
import Store from './component/Redux/Store'


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={Store}>
        <App/>
    </Provider>
);


