import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {clickAll, clickFinished, clickUnfinish} from "../actions"
import { Button } from 'semantic-ui-react'

const divStyle = {
	"width": "600px",
	"marginLeft": "auto",
	"marginRight": "auto",
	"marginTop": "80px",
	"textAlign": "center"
}

const Filter = ({handleAll, handleFinish, handleUnfinish}) => {
	return (
		<div style={divStyle}>
			<Button.Group>
      			<Button onClick={handleAll} icon='tasks' />
      			<Button onClick={handleFinish} icon='checkmark' />
      			<Button onClick={handleUnfinish} icon='remove' />
    		</Button.Group>
		</div>
	)
}

Filter.propTypes = {
	"handleAll": PropTypes.func.isRequired,
	"handleFinish": PropTypes.func.isRequired,
	"handleUnfinish": PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	"handleAll": () => {dispatch(clickAll())},
	"handleFinish": () => {dispatch(clickFinished())},
	"handleUnfinish": () => {dispatch(clickUnfinish())}
})

export default connect(null, mapDispatchToProps)(Filter)