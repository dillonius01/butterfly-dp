import React from 'react';

import SmileEditor from '../containers/SmileEditor';
import SmileDisplay from '../containers/SmileDisplay';

const FullForm = ({ open, openSmileSelector }) => (
  <div id="full-form-container">
		<div id="left-menu">
			<div className="icon-container">
				<a href="https://support.butterfly.ai" target="_blank" rel="noopener noreferrer">
					<img src="/public/icon.png" />
				</a>
			</div>
			<div className="icon-container info">
				<a href="https://support.butterfly.ai" target="_blank" rel="noopener noreferrer">
					<img id="info-icon" src="/public/assets/InfoIcon.svg" />
				</a>
			</div>
		</div>

		<div id="full-form-content">
			<div id="full-form-header" onClick={openSmileSelector}>
				{ open ? <SmileEditor /> : <SmileDisplay /> }
			</div>
			
		</div>
	

  </div>
)

FullForm.propTypes = {
	open: React.PropTypes.bool.isRequired,
	openSmileSelector: React.PropTypes.func.isRequired
}

export default FullForm;
