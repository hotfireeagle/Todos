import React from "react"
import {View as TodoView} from "./todos/"
import {View as FilterView} from "./filter"
import "./app.css"

function App(){
	return (
		<div className="shbox sh-down-lr">
			<TodoView />
			<FilterView />
		</div>
	)
}

export default App