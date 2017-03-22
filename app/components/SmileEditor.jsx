import React, { Component } from 'react';
import { createMoods } from '../redux/selectors';
import Smiley from './Smiley';

class SmileEditor extends Component {
	constructor(props) {
		super(props);
		this.smileyClick = this.smileyClick.bind(this);
	}

	smileyClick(evt) {
		evt.stopPropagation();
		const { updateRating, closeSmileEditor } = this.props;
		const level = evt.target.getAttribute('value');
		updateRating(level);
		closeSmileEditor();
	}

	render() {
		const { rating } = this.props;
		return (
			<div id="smile-editor-container">
				<div className="mistake-text">
					<h4>Did you make a mistake? Please select your correct mood:</h4>
				</div>
				<div className="hover-smileys-container">
					{
						createMoods().map((mood, index, arr) => {
							return (
									<div key={index} className="single-hover-container" onClick={this.smileyClick}>
										<Smiley
											mood={mood}
											level={arr.length - index}
											background={rating === arr.length - index}
											showOnHover={true}
											/>
									</div>
							)
						})
					}
				</div>
			</div>
		)
	}
}

SmileEditor.propTypes = {
	rating: React.PropTypes.number.isRequired,
	updateRating: React.PropTypes.func.isRequired,
	closeSmileEditor: React.PropTypes.func.isRequired
}

export default SmileEditor;
