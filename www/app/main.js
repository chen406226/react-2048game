import React from "react";
import ReactDOM from "react-dom"
import thunk from "redux-thunk"
import logger from "redux-logger"
import {Provider} from "react-redux"
import {createStore,applyMiddleware} from "redux"
import App from "./containers/App.js"
import reducer from "./store/reducer.js"

const store=createStore(reducer,applyMiddleware(thunk,logger))

ReactDOM.render(
	<Provider store={store}>
	<App></App>
	</Provider>
	,
	document.querySelector("#root")
	)









