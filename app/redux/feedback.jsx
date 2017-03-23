import { CLEAR_ALL } from './rating';

/* -----------------    ACTIONS     ------------------ */
const SUBMIT_FEEDBACK = 'SUBMIT_FEEDBACK';

/* ------------   ACTION CREATORS     ----------------- */

export const submitFeedback = feedback => ({
  type: SUBMIT_FEEDBACK,
  feedback
});

/* -------------       REDUCER     ------------------- */

const reducer = (state = null, action) => {
  switch (action.type) {
    case SUBMIT_FEEDBACK:
      return action.feedback;
    case CLEAR_ALL:
      return null;
    default:
      return state;
  }
};


export default reducer;
