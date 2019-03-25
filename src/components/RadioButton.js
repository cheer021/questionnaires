import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';InputGroup
class RadioButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: this.props.checked
		};
	}

	onChange(event) {
		const { checked } = event.target;

		this.setState({ checked });
		this.props.onChange(checked);
	}

	render() {
		return <InputGroup.Radio  
				name={this.props.name}
				aria-label="Radio button for following text input"
				onChange={this.onChange.bind(this)}
				value = {this.state.value} />;
	}
}

export default RadioButton;