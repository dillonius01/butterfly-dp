/* -----------------    ACTIONS     ------------------ */
const UPDATE_RATING = 'UPDATE_RATING';
const CLEAR_RATING = 'CLEAR_RATING';

/* ------------   ACTION CREATORS     ----------------- */

export const updateRating = rating => ({
  type: UPDATE_RATING,
  rating: +rating
});

export const clearRating = () => ({
	type: CLEAR_RATING
});

// export const updateRatingAndToggleUI = fn => evt => {
//   const level = evt.target.getAttribute('value');
//   fn();
//   return updateRating(level);
// }

/* -------------       REDUCER     ------------------- */

const reducer = (state = null, action) => {
  switch (action.type) {
    case UPDATE_RATING:
      return action.rating;
    case CLEAR_RATING:
    	return null;
    default:
      return state;
  }
};


export default reducer;
