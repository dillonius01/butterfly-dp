import React from 'react';


const Smiley = ({ mood, level }) => (
	<div className="smiley">
		<img value={level} src={`/public/assets/${mood}.svg`} />
	</div>
);

Smiley.propTypes = {
	mood: React.PropTypes.string.isRequired,
	level: React.PropTypes.number.isRequired
};

export default Smiley;
