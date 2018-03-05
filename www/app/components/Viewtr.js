import React from "react"
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import * as actions from '../actions/actions.js'
import Viewtd from "./Viewtd.js"

class Viewtr extends React.Component{
	constructor({todos}){
		super()
	}
	render(){
		return (<tr>
		{
			this.props.item.content.map((item,index)=>{
				return (<Viewtd
					key={index} item={item} col={index} row={this.props.row}
					></Viewtd>)
			})
		}

			</tr>)
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
)(Viewtr)













































