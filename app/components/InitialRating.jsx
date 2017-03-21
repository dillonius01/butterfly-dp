import React from 'react';

const InitialRating = ({ updateRating }) => (
  <div id="initial-rating-container">
		<div className="jumbo">
			<div className="jumbo-header">
				<img className="banner" src="/public/assets/banner.png" />
			</div>
			<div className="jumbo-content">
				<h4><strong>DEMO INC.</strong> would like to know:</h4>
				<h2>How is your week going?</h2>
				<div className="mood-container">
					
				</div>
		    <button onClick={() => updateRating(Math.floor(Math.random() * 5))}>Update</button>
				<div id="disclaimer">
					<h4>Your answer will always remain anonymous</h4>
				</div>
			</div>

		</div>

  </div>
)

InitialRating.propTypes = {
	updateRating: React.PropTypes.func.isRequired
}

export default InitialRating;
