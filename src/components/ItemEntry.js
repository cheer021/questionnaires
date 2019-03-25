import React from 'react';
import RadioButton from './RadioButton';
import InputBox from './InputBox';
import SimpleButton from './Button';
import InputGroup from 'react-bootstrap/InputGroup'
import {DELETE_BTN_TEXT} from '../resources/en_us';
class ItemEntry extends React.Component {
	render() {
		const { item, itemsLength, changeStatus, radioButtonsGroupName, changeItemText } = this.props;
		const handleChange = (checked) => changeStatus(item.id, checked);
		const handleTextChange = (text) => changeItemText(item.id, text);
		return (
			<div className="ui-state-default">
				<InputGroup className="mb-3">
					<InputGroup.Prepend>
						<RadioButton
							name={radioButtonsGroupName}
							onChange={handleChange}
							value={item.text} />
					</InputGroup.Prepend>

					<InputBox text={item.text}
						id={item.id}
						addNewItem={this.props.addNewItem}
						handleTextChange={handleTextChange}
					></InputBox>
					<InputGroup.Append>
						<SimpleButton
							variant="light"
							text={DELETE_BTN_TEXT}
							disabled={itemsLength === 1}
							id={item.id}
							onClick={this.props.deleteItem}>{DELETE_BTN_TEXT}
								</SimpleButton>
					</InputGroup.Append>
				</InputGroup>
			</div>
		);
	}
}

export default ItemEntry;