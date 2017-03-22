import React, { Component } from 'react';
import Smiley from './Smiley';
import { createMoods } from '../redux/selectors';

class InitialRating extends Component {
	constructor(props) {
		super(props)
		this.smileyClick = this.smileyClick.bind(this);
	}

	smileyClick(evt) {
		const { updateRating } = this.props;
		const level = evt.target.getAttribute('value');
		updateRating(level);
	}

	render() {
		return (
		  <div id="initial-rating-container">
				<div className="jumbo">
					<div className="jumbo-header">
						<img className="banner" src="/public/assets/banner.png" />
					</div>
					<div className="jumbo-content">
						<h4><strong>DEMO INC.</strong> would like to know:</h4>
						<h2>How is your week going?</h2>
						<div className="mood-container" onClick={this.smileyClick}>
							{
								createMoods()
									.map((mood, index, arr) => <Smiley mood={mood} level={arr.length - index} key={index} />)
							}
						</div>
						<div id="disclaimer">
							<h4>Your answer will always remain anonymous</h4>
						</div>
					</div>
				</div>
				<div className="jumbo-footer">
					<h6>Butterfly. Your Team's Happiness Manager.</h6>
					<p>Appynest, Inc. - 67 West Street, Suite 414 - Brooklyn, NY 11222, USA</p>
					<p>&copy; 2017 Appynest, Inc. All rights reserved</p>
				</div>

		  </div>
		)
	}
}

InitialRating.propTypes = {
	updateRating: React.PropTypes.func.isRequired
}

export default InitialRating;
