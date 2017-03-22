import { connect } from 'react-redux';
import InitialRating from '../components/InitialRating';
import { updateRating } from '../redux/rating';

const mapDispatchToProps = dispatch => ({
  updateRating: rating => dispatch(updateRating(rating)),
});

export default connect(null, mapDispatchToProps)(InitialRating);
