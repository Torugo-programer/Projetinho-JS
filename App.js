import React from "react";
import {createRoot} from "react-dom/client";
import Header from ".";

const App = () => {
    <Header/>
}

const root = createRoot(document.querySelector('#root'))
root.render(
    <App/>
)