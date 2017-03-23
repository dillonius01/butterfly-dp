import React, { Component } from 'react';
import { connect } from 'react-redux';
import FullForm from '../components/FullForm';
import { createQuestions, formatQuestions } from '../redux/selectors';
import { submitFeedback } from '../redux/feedback';
import { browserHistory } from 'react-router';

class FullFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      questions: formatQuestions(createQuestions()),
      lastComment: ''
    };
    this.openSmileEditor = this.openSmileEditor.bind(this);
    this.closeSmileEditor = this.closeSmileEditor.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleScoreChange = this.handleScoreChange.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
    this.handleLastCommentChange = this.handleLastCommentChange.bind(this);
    this.checkIfFormValid = this.checkIfFormValid.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  openSmileEditor(evt) {
    evt.stopPropagation();
    this.setState({ open: true })
  }

  closeSmileEditor() {
    this.setState({ open: false })
  }

  updateQuestion(questionId, newVals) {
    // iterate thru state.questions to find right question
    const questionToUpdate = this.state.questions.find(question => question.id === questionId);

    // create new question object to avoid mutating state
    const newQuestionObj = Object.assign({}, questionToUpdate, newVals);

    // create new questions array with updated question
    const newQuestionsArr = this.state.questions.map(question => {
      return (question.id === questionId) ? newQuestionObj : question;
    });

    // finally, call setState
    this.setState({ questions: newQuestionsArr });
  }

  handleCommentChange(evt) {
    const questionId = +evt.target.getAttribute('data-id');
    const comment = evt.target.value;
    this.updateQuestion(questionId, { comment });
  }

  handleScoreChange(evt) {
    const questionId = +evt.currentTarget.getAttribute('data-id');
    const score = +evt.currentTarget.getAttribute('value');
    this.updateQuestion(questionId, { score });
  }

  handleLastCommentChange(evt) {
    const lastComment = evt.target.value;
    this.setState({ lastComment });
  }

  checkIfFormValid() {
    return !!this.state.questions.find(question => question.score <= 0);
  }

  submitForm() {
    const { dispatchForm, rating } = this.props;
    const { questions, optionalComment } = this.state;
    const feedback = Object.assign({}, { questions, rating, optionalComment });
    dispatchForm(feedback);
    browserHistory.push('/success')
  }

	render() {
		const { open, questions } = this.state;
		return (

			<FullForm
				open={open}
        questions={questions}
				openSmileEditor={this.openSmileEditor}
        closeSmileEditor={this.closeSmileEditor}
        handleCommentChange={this.handleCommentChange}
        handleScoreChange={this.handleScoreChange}
        handleLastCommentChange={this.handleLastCommentChange}
        checkIfFormValid={this.checkIfFormValid}
        submitForm={this.submitForm}
				{...this.props}
			/>
		)
	}
}


const mapStateToProps = ({ rating }) => ({ rating });
const mapDispatchToProps = dispatch => ({
  dispatchForm: feedback => dispatch(submitFeedback(feedback))
});

export default connect(mapStateToProps, mapDispatchToProps)(FullFormContainer);
