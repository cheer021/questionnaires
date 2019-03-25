import React from 'react';
import KEYCODES from '../constants/KEYCODES';
import FormControl from 'react-bootstrap/FormControl'

class InputBox extends React.Component {
	constructor(props) {
		super(props);
		const defaultPlaceholder = 'Option';
		this.state = {
			text: props.placeholderText || defaultPlaceholder,
			readonly: props.readonly
		}
	}
	onChange(event){
		this.setState({text: event.target.value});
	}
	onKeyUp(event){
		const text = this.state.text.trim();
		this.props.handleTextChange(this.state.text);
		if(event.nativeEvent.keyCode === KEYCODES.ENTER){
			this.props.addNewItem(text);
		}
	}
	render() {
		return (
			<FormControl type="text" className="form-control width100" 
				placeholder={this.state.text} 
				text = {this.state.text}
				aria-label={this.state.text}
				onChange = {this.onChange.bind(this)}
				onKeyUp = {this.onKeyUp.bind(this)} 
				autoFocus
			></FormControl>		
		);
	}

}
export default InputBox;