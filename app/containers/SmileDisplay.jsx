import { connect } from 'react-redux';
import SmileDisplay from '../components/SmileDisplay';
import { getFeedbackText, getSmileyUrl } from '../redux/selectors';

const mapStateToProps = state => ({
	feedbackText: getFeedbackText(state),
	smileyUrl: getSmileyUrl(state)
});

export default connect(mapStateToProps, null)(SmileDisplay);
