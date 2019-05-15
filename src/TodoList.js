import React from 'react';

class TodoList extends React.Component {
	
	/*
	componentDidUpdate() {
    	this.props.inputElement.current.focus()
  	}
  	*/

	render() {
		return (
			<div className = "todoListMain">
				<div className = "header">
					<form onSubmit = { this.props.addItem }>
						<input 
							type = "text" 
							placeholder = "Go to gym!!"
							ref = {this.props.inputElement}
							value = {this.props.currentItem.text}
							onChange = {this.props.handleInput}
							 />
						<button type = "submit"> Add Task </button>
					</form>
				</div>
			</div>
		)
	}
}

export default TodoList