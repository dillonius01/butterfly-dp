import React from 'react';
import { connect } from 'react-redux';
import SmileDisplay from '../components/SmileDisplay';

const mapStateToProps = ({ rating }) => ({ rating });

export default connect(mapStateToProps, null)(SmileDisplay);