import React from 'react';
import EditableLabel from './EditableLabel';
export default function Header(props) {
	return (
		<header>
			<EditableLabel value={props.question.text} id = {props.question.id}></EditableLabel>
		</header>
	);
}