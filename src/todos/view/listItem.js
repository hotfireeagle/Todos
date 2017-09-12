import React from "react"
import PropTypes from "prop-types"
import {Button} from 'semantic-ui-react'

const liStyle = {
	"width": "600px"
}

const buttonStyle = {
	"display": "inline-block",
	"width": "50px",
	"height": "80px"
}

const spanStyle = {
	"display": "inline-block",
	"width": "496px",
	"height": "80px",
	"textAlign": "center",
	"overflow": "hidden",
	"verticalAlign": "bottom"
}



const ListItem = ({value, finished, handleReverse, handleDelete}) => {
	return (
		<li style={{"position": "relative","width": "600px","height": "40px","marginBottom": "10px"}}>
			<Button style={{"marginRight": "0px","height": "40px","fontFamily": "FangSong"}} onClick={handleReverse}>反转</Button>
			<span style={{
				"display":"inline-block","textDecoration": finished ? "line-through" : "none",
				"height": "40px",
				"lineHeight": "40px",
				"width":"458.9px",
				"paddingLeft": "20px",
				"fontSize": "40px",
				"verticalAlign": "bottom"
			}}>
				{value}
			</span>
			<Button style={{"marginRight": "0px","height": "40px","fontFamily": "FangSong"}} onClick={handleDelete}>删除</Button>
		</li>
	)
}

ListItem.propTypes = {
	"value": PropTypes.string.isRequired,
	"finished": PropTypes.bool.isRequired,
	"handleReverse": PropTypes.func.isRequired,
	"handleDelete": PropTypes.func.isRequired
}

export default ListItem