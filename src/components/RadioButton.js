import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import A11Y_RADIOBUTTON from '../resources/en_us';
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
				aria-label= {A11Y_RADIOBUTTON}
				onChange={this.onChange.bind(this)}
				value = {this.state.value} />;
	}
}

export default RadioButton;