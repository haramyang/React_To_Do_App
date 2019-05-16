import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList.js';
import TodoItems from './TodoItems.js';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
			items: [], 
			currentItem: {text: '', key: ''}
		};
		this.addItem = this.addItem.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		let inputElement = React.createRef()
	}

	addItem(e) {
		e.preventDefault();
		const newItem = this.state.currentItem;
		if (newItem.text !== '') {
	      const items = this.state.items;
	      items.push(newItem);
	      this.setState({
	        items: items,
	        currentItem: { text: '', key: '' },
	      })
	    }
	}

	deleteItem = key => {
	    const filteredItems = this.state.items.filter(item => {
	      return item.key !== key
	    })
	    this.setState({
	      items: filteredItems,
	    })
	  }

	handleInput(e) {
		let itemText = e.target.value;
		const currItem = {text: itemText, key: Date.now()};
		this.setState({
			currentItem: currItem
		});
	}

	render() {
		return (
			<div className="App">
				<TodoList
          			addItem={this.addItem}
		          	inputElement={this.inputElement}
		          	handleInput={this.handleInput}
		          	currentItem={this.state.currentItem}
		        />
		        <TodoItems 
		        	entries = {this.state.items} 
		        	deleteItem = {this.deleteItem}
		        />
			</div>
		);
	}
}

export default App;
