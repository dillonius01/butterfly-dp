import React from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = ({ rating }) => ({ rating });

export default connect(mapStateToProps, null)(Home);