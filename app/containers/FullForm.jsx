import React, { Component } from 'react';
import { connect } from 'react-redux';
import FullForm from '../components/FullForm';


class StatefulFullForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.openSmileEditor = this.openSmileEditor.bind(this);
    this.closeSmileEditor = this.closeSmileEditor.bind(this)
  }

  openSmileEditor(evt) {
    evt.stopPropagation();
    this.setState({ open: true })
  }

  closeSmileEditor() {
    this.setState({ open: false })
  }

	render() {
		const { open } = this.state;
		return (

			<FullForm
				open={open}
				openSmileEditor={this.openSmileEditor}
        closeSmileEditor={this.closeSmileEditor}
				{...this.props}
			/>
		)
	}
}


const mapStateToProps = ({ rating }) => ({ rating });

export default connect(mapStateToProps, null)(StatefulFullForm);
