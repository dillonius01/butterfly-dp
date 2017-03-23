import React, { Component } from 'react';
import Feedback from '../components/Feedback';

class FeedbackContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
		this.openComment = this.openComment.bind(this);
	}

	openComment() {
		this.setState({ open: true })
	}

	componentWillReceiveProps(nextProps) {
		const oldScore = this.props.question.score;
		const newScore = nextProps.question.score;
		const noOldComment = !this.props.question.comment;
		const noComment = !nextProps.question.comment;

		if ((newScore !== oldScore) && newScore < 4) {
			this.openComment();
		} else if (noOldComment && noComment && newScore >= 4) {
			this.setState({ open: false })
		}
	}

	render() {
		const { open } = this.state;
		return <Feedback open={open} openComment={this.openComment} {...this.props} />
	}
}

export default FeedbackContainer;
