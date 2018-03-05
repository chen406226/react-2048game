import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from "../actions/actions.js";
import Viewtr from "./Viewtr.js"

class View extends React.Component{
	constructor({todos}){
		super()
	}

	render(){
		return (<div>
			<table>
			<tbody>
		{
			this.props.todos.map((item,index)=>{
				return <Viewtr
				key={index} item={item} row={index} ></Viewtr>
			})
		}

			</tbody>
			</table>
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

)(View)
























