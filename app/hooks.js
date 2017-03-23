import store from './redux/store';
import { updateRating } from './redux/rating';

export const onMainEnter = nextState => {
	const newRating = +nextState.location.query.v;
	if (newRating) {
		store.dispatch(updateRating(newRating));
	}
};
