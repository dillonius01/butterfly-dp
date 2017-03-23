import React from 'react';

const OptionalFeedback = ({ handleLastCommentChange }) => (
	<div className="form-feedback-container">
		<div className="triangle blue" />
		<div className="form-feedback-content blue">
			<div className="form-prompt white">
				<h3>Anything to add?</h3>
			</div>

			<div className="comment-container">
					<textarea
						onChange={handleLastCommentChange}
						className="comment optional"
						type="text"
						placeholder="Express yourself freely and safely. This will always remain anonymous." />
			</div>
		</div>
	</div>
);

OptionalFeedback.propTypes = {
	handleLastCommentChange: React.PropTypes.func.isRequired
};

export default OptionalFeedback;
