import React, {Component} from "react"
import PropTypes from "prop-types"
import {addTodo} from "../actions"
import {connect} from "react-redux"
import { Icon, Input } from 'semantic-ui-react'

const formStyle = {
	"width": "600px",
	"height": "50px",
	"margin": "50px auto auto auto"
}

const inputStyle = {
	"display": "inline-block",
	"width": "600px",
	"height": "50px"
}

class AddTodo extends Component{
	constructor(props, context){
		//这里的问题是对于视图组件来说，如果我不super context的话是否可行
		super(props, context)
		this.state = {
			"value": ""
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event){
		let value = event.target.value
		this.setState({"value": value})
	}

	handleSubmit(event){
		event.preventDefault()
		let text = this.state.value
		if(!text.trim()){
			window.alert("必须输入有效内容后再进行提交")
			return
		}
		this.props.handleAddTodo(text)
		this.setState({"value": ""})
	}

	shouldComponentUpdate(nextProps, nextState){
		return (nextProps.handleAddTodo !== this.props.handleAddTodo)
			|| (nextState.value !== this.state.value)
	}

	render(){
		return (
			<form style={formStyle} action="#" onSubmit={this.handleSubmit}>
				<Input
					style={{"width": "600px"}}
					value={this.state.value}
					onChange={this.handleChange}
					required
    				icon={<Icon name='plus' inverted circular link onClick={this.handleSubmit}/>}
    				placeholder="请输入内容...."
  				/>
			</form>
		)
	}
}

AddTodo.propTypes = {
	"handleAddTodo": PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	"handleAddTodo": (text) => {dispatch(addTodo(text))}
})

export default connect(null, mapDispatchToProps)(AddTodo)