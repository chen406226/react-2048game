import React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as actions from "../actions/actions.js"
import Minu from "../components/Minu.js"
import View from "../components/View.js"

class App extends React.Component{
	constructor({todos}) {
		super();
	}

	componentDidMount() {
		this.props.init();
		window.addEventListener("keydown", this.props.keychange)
	}
	render(){	
		return (<div>
			<Minu></Minu>
			<hr/>
			<View></View>
			</div>)
	}
}

export default connect(
	({todos})=>{
		return {
			todos
		}
	},
	(dispatch)=>{
		return bindActionCreators(actions,dispatch)
	}
)(App)

















