import React from 'react';

import LeftMenu from './LeftMenu';
import SmileEditor from '../containers/SmileEditor';
import SmileDisplay from '../containers/SmileDisplay';

const FullForm = ({ open, openSmileSelector }) => (
  <div id="full-form-container">
		<LeftMenu />

		<div id="full-form-content">
			<div id="full-form-header" onClick={openSmileSelector}>
				{ open ? <SmileEditor /> : <SmileDisplay openSmileSelector={openSmileSelector} /> }
			</div>
			
		</div>
	

  </div>
)

FullForm.propTypes = {
	open: React.PropTypes.bool.isRequired,
	openSmileSelector: React.PropTypes.func.isRequired
}

export default FullForm;
