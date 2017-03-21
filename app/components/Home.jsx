import React, { Component } from 'react';
import FullForm from '../containers/FullForm';
import InitialRating from '../containers/InitialRating';

export default ({ rating }) => {
  return rating ? <FullForm /> : <InitialRating />
}
