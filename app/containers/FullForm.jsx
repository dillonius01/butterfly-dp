import React, { Component } from 'react';
import { connect } from 'react-redux';
import FullForm from '../components/FullForm';
import { createQuestions, formatQuestions } from '../redux/selectors';


class StatefulFullForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      questions: formatQuestions(createQuestions())
    };
    this.openSmileEditor = this.openSmileEditor.bind(this);
    this.closeSmileEditor = this.closeSmileEditor.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleScoreChange = this.handleScoreChange.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
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

  componentDidUpdate(prevProps, prevState) {
    // for debugging only, WIP
    console.log('updated and now state is ', this.state)
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

  checkIfFormValid() {
    return !this.state.questions.find(question => question.score <= 0);
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
				{...this.props}
			/>
		)
	}
}


const mapStateToProps = ({ rating }) => ({ rating });

export default connect(mapStateToProps, null)(StatefulFullForm);
