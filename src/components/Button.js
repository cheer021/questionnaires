import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class SimpleButton extends Component {
	constructor(props) {
		super(props);
		this.onClick = this.props.onClick;
	}
	
	render() {
		const { variant, text, id, disabled } = this.props;
		return ( <Button variant={variant} disabled ={disabled} id = {id} onClick={this.onClick}>{text}</Button>
		);
	}
}
export default SimpleButton;


