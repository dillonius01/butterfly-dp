import { browserHistory } from 'react-router';
import store from './redux/store';
import { updateRating, clearAll } from './redux/rating';

export const onMainEnter = nextState => {
	const newRating = +nextState.location.query.v;
	if (newRating) {
		store.dispatch(updateRating(newRating));
	}
};

export const onSuccessEnter = () => {
	const { feedback } = store.getState();
	if (!feedback) {
		browserHistory.push('/')
	}
};

export const onSuccessLeave = () => {
	store.dispatch(clearAll());
};
