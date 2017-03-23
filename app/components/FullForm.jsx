import React from 'react';

import LeftMenu from './LeftMenu';
import SmileEditor from '../containers/SmileEditor';
import SmileDisplay from '../containers/SmileDisplay';
import Feedback from '../containers/Feedback';

const FullForm = ({
	open, openSmileEditor, closeSmileEditor,
	questions, handleCommentChange, handleScoreChange }) => (
  <div id="full-form-container">
		<LeftMenu />

		<div id="full-form-content">
			<div id="full-form-header">
				{ open ?
					<SmileEditor closeSmileEditor={closeSmileEditor} /> :
					<SmileDisplay openSmileEditor={openSmileEditor} />
				}
			</div>
			<div id="full-form-preface">
				<h3>Do you agree with the following statements:</h3>
			</div>
			<div id="full-form-questions">
				{
					questions && questions.map(question => (
						<Feedback
							key={question.id}
							question={question}
							handleCommentChange={handleCommentChange}
							handleScoreChange={handleScoreChange} />
						))
				}
			</div>
		</div>
  </div>
)

FullForm.propTypes = {
	open: React.PropTypes.bool.isRequired,
	openSmileEditor: React.PropTypes.func.isRequired,
	closeSmileEditor: React.PropTypes.func.isRequired,
	questions: React.PropTypes.array.isRequired,
	handleCommentChange: React.PropTypes.func.isRequired,
	handleScoreChange: React.PropTypes.func.isRequired
}

export default FullForm;
