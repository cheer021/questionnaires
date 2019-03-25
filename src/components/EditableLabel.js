import React, { Component } from 'react';

class EditableLabels extends Component {

	constructor(props) {
		super(props);
		this.state = {
			editing: false
		}
	}

	toggleEdit(e) {
		e.stopPropagation();
		if (this.state.editing) {
			this.cancel();
		} else {
			this.edit();
		}
	}

	edit() {
		this.setState({
			editing: true
		}, () => {
			this.domElm.focus();
		});
	}

	save() {
		this.setState({
			editing: false
		}, () => {
			if (this.props.onSave && this.isValueChanged()) {
				console.log('Value is changed', this.domElm.textContent);
			}
		});
	}

	cancel() {
		this.setState({
			editing: false
		});
	}

	isValueChanged() {
		return this.props.value !== this.domElm.textContent
	}

	handleKeyDown(e) {
		const { key } = e;
		switch (key) {
			case 'Enter':
			case 'Escape':
				this.save();
				break;
		}
	}

	render() {
		let editOnClick = true;
		const { editing } = this.state;
		if (this.props.editOnClick !== undefined) {
			editOnClick = this.props.editOnClick;
		}
		const editingClass = editing ? 'editing' : ''
		const className =`editableLabel ${editingClass}`
		return (
			<div
				className={className}
				onClick={editOnClick ? this.toggleEdit.bind(this) : undefined}
				contentEditable={editing}
				ref={(domNode) => {
					this.domElm = domNode;
				}}
				onBlur={this.save.bind(this)}
				onKeyDown={this.handleKeyDown.bind(this)}
				{...this.props}
			>
				{this.props.value}
			</div>
		)
	}
}


export default EditableLabels;