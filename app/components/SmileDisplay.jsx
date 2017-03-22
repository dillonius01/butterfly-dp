import React from 'react';

const SmileDisplay = ({ feedbackText, smileyUrl, openSmileEditor }) => (
	<div id="smile-display">

		<div className="feedback-container">
			<div id="smile-edit-container" onClick={openSmileEditor}>
				<div className="edit-icon-container">
					<img src="/public/assets/EditIcon.svg" />
				</div>
				<div  className="big-smiley-container">
					<img src={smileyUrl} />
				</div>
			</div>
			<div className="feedback-text-container">
				<p>
					{ feedbackText }
				</p>
				<p className="disclaimer">Your answers will <strong>always remain anonymous</strong></p>
			</div>
			<div className="company-name">
				<h2>Demo Inc.</h2>
			</div>
		</div>
	</div>
);

//onClick={openSmileEditor}

SmileDisplay.propTypes = {
	feedbackText: React.PropTypes.string.isRequired,
	smileyUrl: React.PropTypes.string.isRequired,
	openSmileEditor: React.PropTypes.func.isRequired
}

export default SmileDisplay;
