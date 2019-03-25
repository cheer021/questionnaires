import React, { Component } from 'react';
import ItemEntry from './ItemEntry';
import QuestionHeader from './QuestionHeader';
import { getAllItems, addToList, deleteFromList, findItemIndexByItemId } from '../Utils/Items';

class Question extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: getAllItems(),
			question: this.props.question
		}
	}
	render() {
		const count = this.state.items.length;
		const items = this.state.items;
		const radioButtonsGroupName = 'radioButtonSet' + this.props.question.id;

		return (<div className='questionContainer'>
			<QuestionHeader question={this.state.question} />
			
					<ul className="list-unstyled">
						{items.map(item =>
							<ItemEntry
								key={item.id}
								item={item}
								itemsLength = {items.length}
								radioButtonsGroupName={radioButtonsGroupName}
								selectedOption={this.state.selectedOption}
								changeItemText = {this.changeItemText.bind(this)}
								changeStatus={this.changeStatus.bind(this)}
								addNewItem={this.addNewItem.bind(this)}
								deleteItem={this.deleteItem.bind(this)}
							/>)}
					</ul>
		</div>);


	}

	addNewItem(text) {
		let updatedList = addToList(this.state.items, { text });
		this.setState({ items: updatedList })
	}

	deleteItem(event) {
		let updatedList = deleteFromList(this.state.items, event.target.id);
		this.setState({ items: updatedList })
	}

	changeStatus(itemId) {
	
		const itemIndex = findItemIndexByItemId(this.state.items, itemId);
		// itemIndex can be zero. Checking truly is not enough
		if (typeof itemIndex !== 'undefined') {
			this.state.question.selection = {
				id: itemId,
				text: this.state.items[itemIndex].text 
			}
		}
	}

	changeItemText(itemId, newText) {
		const itemIndex = findItemIndexByItemId(this.state.items, itemId);
		// itemIndex can be zero. Checking truly is not enough
		if (typeof itemIndex !== 'undefined') {
			this.state.items[itemIndex].text = newText;
			if( this.state.question.selection.id === itemId){
				this.state.question.selection.text = newText;
			}
		}
	}

}
export default Question;