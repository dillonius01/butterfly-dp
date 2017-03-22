import React from 'react';

const Smiley = ({ mood, level, background, shadow, showOnHover }) => (
	<div className={`smiley ${background ? 'smiley-background' : ''} ${shadow ? 'shadow' : ''} ${showOnHover ? 'show-on-hover' : ''}`}>
		<img value={level} src={`/public/assets/${mood}.svg`} />
	</div>
);

Smiley.propTypes = {
	mood: React.PropTypes.string.isRequired,
	level: React.PropTypes.number.isRequired,
	background: React.PropTypes.bool,
	shadow: React.PropTypes.bool,
	showOnHover: React.PropTypes.bool
};

Smiley.defaultProps = {
	background: false,
	shadow: false,
	showOnHover: false
}

export default Smiley;
