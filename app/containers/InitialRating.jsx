import { connect } from 'react-redux';
import InitialRating from '../components/InitialRating';
import { updateRating } from '../redux/rating';

const mapDispatchToProps = dispatch => ({
  updateRating: number => dispatch(updateRating(number)),
});

export default connect(null, mapDispatchToProps)(InitialRating);
