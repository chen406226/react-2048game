import React from "react"
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import * as actions from '../actions/actions.js'

class Viewtd extends React.Component{
	constructor({todos}){
		super()
	}


	render(){
		var thiscolor=this.props.todos[this.props.row].content[this.props.col];
		return (<td className={`c${thiscolor}`}>
			{this.props.item}
			</td>)
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
)(Viewtd)



















