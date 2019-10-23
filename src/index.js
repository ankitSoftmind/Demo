import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./reduxPart/store";
import Routing from './component/routingComponent';

ReactDOM.render(<Provider store={store}><Routing/></Provider>, document.getElementById("root"));
