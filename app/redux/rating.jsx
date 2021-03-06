/* -----------------    ACTIONS     ------------------ */
const UPDATE_RATING = 'UPDATE_RATING';
export const CLEAR_ALL = 'CLEAR_ALL';

/* ------------   ACTION CREATORS     ----------------- */

export const updateRating = rating => ({
  type: UPDATE_RATING,
  rating: +rating
});

export const clearAll = () => ({
	type: CLEAR_ALL
});


/* -------------       REDUCER     ------------------- */

const reducer = (state = null, action) => {
  switch (action.type) {
    case UPDATE_RATING:
      return action.rating;
    case CLEAR_ALL:
    	return null;
    default:
      return state;
  }
};


export default reducer;
