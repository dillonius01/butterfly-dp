import React, { Component } from 'react';
import { connect } from 'react-redux';
import FullForm from '../components/FullForm';


class StatefulFullForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating1: 'best'
    };
  }

	render() {
		const { rating1 } = this.state;
		return (

			<FullForm
				rating1={rating1}
				{...this.props}
			/>
		)
	}
}


const mapStateToProps = ({ rating }) => ({ rating });

export default connect(mapStateToProps, null)(StatefulFullForm);
