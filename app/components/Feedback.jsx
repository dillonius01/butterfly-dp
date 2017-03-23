import React from 'react';
import Scrollbar from '../containers/Scrollbar';

const Feedback = ({ question, open, openComment, handleCommentChange, handleScoreChange }) => (
	<div className="form-feedback-container">
		<div className="triangle" />
		<div className="form-feedback-content">
			<div className="form-prompt">
				<h3>{question.prompt}</h3>
			</div>

			<Scrollbar handleScoreChange={handleScoreChange} question={question} />

			<div className="comment-container">
				{
					open ?
					<input
						onChange={handleCommentChange}
						data-id={question.id}
						className="comment"
						type="text"
						placeholder="Anything to add or suggest to your manager?" /> :
					<h5
						className="add-comment"
						onClick={openComment}
					>
						Add Comment
					</h5>
				}
			</div>
		</div>
	</div>
);

Feedback.propTypes = {
	question: React.PropTypes.object.isRequired,
	open: React.PropTypes.bool.isRequired,
	openComment: React.PropTypes.func.isRequired,
	handleCommentChange: React.PropTypes.func.isRequired,
	handleScoreChange: React.PropTypes.func.isRequired
}

export default Feedback;
