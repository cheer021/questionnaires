import React from 'react';
import SimpleButton from './Button';
import {NEW_QUESTION_BTN_TEXT, SUBMIT_BTN_TEXT} from '../resources/en_us';
export default function Footer(props) {
	const {onDuplicateClick, onSubmitClick } = props;
	return (
		<div>
			<SimpleButton variant = 'secondary' text ={NEW_QUESTION_BTN_TEXT} onClick = {onDuplicateClick}></SimpleButton>
			<SimpleButton text ={SUBMIT_BTN_TEXT} onClick = {onSubmitClick}></SimpleButton>
		</div>
	);
}