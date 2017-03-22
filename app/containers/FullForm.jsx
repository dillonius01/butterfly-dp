import React, { Component } from 'react';
import { connect } from 'react-redux';
import FullForm from '../components/FullForm';


class StatefulFullForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.openSmileSelector = this.openSmileSelector.bind(this)
  }

  openSmileSelector() {
  	this.setState({ open: true })
  }

	render() {
		const { open } = this.state;
		return (

			<FullForm
				open={open}
				openSmileSelector={this.openSmileSelector}
				{...this.props}
			/>
		)
	}
}


const mapStateToProps = ({ rating }) => ({ rating });

export default connect(mapStateToProps, null)(StatefulFullForm);
