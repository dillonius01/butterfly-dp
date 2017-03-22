import React from 'react';

const SmileEditor = ({ rating }) => (
	<div id="smile-editor-container">
		Edit that smile {rating}
	</div>
)

SmileEditor.propTypes = {
	rating: React.PropTypes.number.isRequired
}

export default SmileEditor;
