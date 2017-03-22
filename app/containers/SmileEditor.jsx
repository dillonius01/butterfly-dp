import { connect } from 'react-redux';
import SmileEditor from '../components/SmileEditor';
import { updateRating } from '../redux/rating';

const mapStateToProps = ({ rating }) => ({ rating });
const mapDispatchToProps = dispatch => ({
	updateRating: rating => dispatch(updateRating(rating))
})

export default connect(mapStateToProps, mapDispatchToProps)(SmileEditor);
