import React, { Component } from 'react';
import Scrollbar from '../components/Scrollbar';

class ScrollbarContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: 0
		};
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	handleMouseEnter(evt) {
		const selected = +evt.target.getAttribute('data-val');
		this.setState({ selected });
	}

	handleMouseLeave(evt) {
		const { question } = this.props;
		this.setState({ selected: this.props.question.score })
	}

	render() {
		const { selected } = this.state;
		return (
			<Scrollbar
				selected={selected}
				handleMouseEnter={this.handleMouseEnter}
				handleMouseLeave={this.handleMouseLeave}
				{...this.props}
			/>
		)
	}
}

export default ScrollbarContainer;
