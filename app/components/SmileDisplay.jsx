import React from 'react';

const SmileDisplay = ({ rating }) => (
	<div>
		DISPLAY that smile { rating }
	</div>
);

SmileDisplay.propTypes = {
	rating: React.PropTypes.number.isRequired
}

export default SmileDisplay;
