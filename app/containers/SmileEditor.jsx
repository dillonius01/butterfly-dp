import React from 'react';
import { connect } from 'react-redux';
import SmileEditor from '../components/SmileEditor';

const mapStateToProps = ({ rating }) => ({ rating });

export default connect(mapStateToProps, null)(SmileEditor);