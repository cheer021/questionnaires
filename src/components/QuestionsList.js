import React from 'react';
import Footer from './Footer';
import Question from './Question';

let questionId = 0;
const DEFAULTTEXT = 'Untitled question';
class QuestionsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: [
				{
					text: DEFAULTTEXT,
					id: questionId,
					selection: {}
				}
			]
		}
	}

	render() {
		const questions = this.state.questions;
		return (
			<div className="questionsListContainer">
				{questions.map(question =>
					<Question question={question}></Question>
				)}
				{/* <Footer {...{ count }} /> */}

				<Footer onDuplicateClick={this.onDuplicateClick.bind(this)}
					onSubmitClick={this.onSubmitClick.bind(this)} />
			</div>
		);
	}

	onDuplicateClick() {
		questionId++;
		this.state.questions.push({
			text: DEFAULTTEXT,
			id: questionId,
			selection: {}
		});
		this.setState({
			questions: this.state.questions
		})
	}

	onSubmitClick() {
		alert(
			JSON.stringify(this.state.questions));
	}


}

export default QuestionsList;