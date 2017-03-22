import React from 'react';

const SmileDisplay = ({ feedbackText, smileyUrl, openSmileSelector }) => (
	<div id="smile-display">
		<div className="company-name">
			<h3>Demo Inc.</h3>
		</div>
		<div className="feedback-container">
			<div onClick={openSmileSelector}  className="big-smiley-container">
				<img src={smileyUrl} />
			</div>
			<div className="feedback-text-container">
				<p>
					{ feedbackText }
				</p>
				<p className="disclaimer">Your answers will <strong>always remain anonymous</strong></p>
			</div>
		</div>
	</div>
);

SmileDisplay.propTypes = {
	feedbackText: React.PropTypes.string.isRequired,
	smileyUrl: React.PropTypes.string.isRequired,
	openSmileSelector: React.PropTypes.func.isRequired
}

export default SmileDisplay;
