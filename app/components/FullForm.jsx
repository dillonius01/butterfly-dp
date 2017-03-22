import React from 'react';

import LeftMenu from './LeftMenu';
import SmileEditor from '../containers/SmileEditor';
import SmileDisplay from '../containers/SmileDisplay';

const FullForm = ({ open, openSmileEditor, closeSmileEditor }) => (
  <div id="full-form-container">
		<LeftMenu />

		<div id="full-form-content">
			<div id="full-form-header">
				{ open ?
					<SmileEditor closeSmileEditor={closeSmileEditor} /> :
					<SmileDisplay openSmileEditor={openSmileEditor} />
				}
			</div>
			<div id="full-form-questions">
				Questions go here bruh
			</div>
		</div>
  </div>
)

FullForm.propTypes = {
	open: React.PropTypes.bool.isRequired,
	openSmileEditor: React.PropTypes.func.isRequired,
	closeSmileEditor: React.PropTypes.func.isRequired
}

export default FullForm;
