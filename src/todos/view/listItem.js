import React from "react"
import PropTypes from "prop-types"
import {Button} from 'semantic-ui-react'
import {connect} from "react-redux"

const liStyle = {
	"position": "relative",
	"width": "600px",
	"height": "40px",
	"marginBottom": "10px"
}

const buttonStyle = {
	"marginRight": "0px",
	"height": "40px",
	"fontFamily": "FangSong"
}

const spanStyle = {
	"height": "40px",
	"lineHeight": "40px",
	"width":"458.9px",
	"paddingLeft": "20px",
	"fontSize": "40px",
	"overflow": "hidden",
	"verticalAlign": "bottom"
}



const ListItem = ({value, finished, onReverse, onDelete}) => {
	return (
		<li style={liStyle}>
			<Button style={buttonStyle} onClick={onReverse}>反转</Button>
			<span style={{
				...spanStyle,
				"display":"inline-block","textDecoration": finished ? "line-through" : "none"
			}}>
				{value}
			</span>
			<Button style={buttonStyle} onClick={onDelete}>删除</Button>
		</li>
	)
}

ListItem.propTypes = {
	"value": PropTypes.string.isRequired,
	"finished": PropTypes.bool.isRequired,
	"handleReverse": PropTypes.func.isRequired,
	"handleDelete": PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
	"value": ownProps.value,
	"finished": ownProps.finished
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	"onReverse": () => {ownProps.handleReverse(ownProps.id)},
	"onDelete": () => {ownProps.handleDelete(ownProps.id)}
})

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)