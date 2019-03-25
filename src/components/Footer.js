import React from 'react';
import SimpleButton from './Button';
export default function Footer(props) {
	const { count, onDuplicateClick, onSubmitClick } = props;
	return (
		<div className="todo-footer">
			<SimpleButton variant = 'secondary' text ='new question' onClick = {onDuplicateClick}></SimpleButton>
			<SimpleButton text ='submit' onClick = {onSubmitClick}></SimpleButton>
		</div>
	);
}