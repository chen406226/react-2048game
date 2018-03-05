import React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from 'redux';
import * as actions from "../actions/actions.js"

class Minu extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (<div className="mi">
			<p>太小不好玩</p>
			<button onClick={()=>{this.props.add()}} >变大</button>
			<p>重新开始</p>
			<button onClick={()=>{this.props.def()}} >重来</button>

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
)(Minu)






























