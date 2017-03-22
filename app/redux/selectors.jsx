export const createMoods = () => ([
	'VeryHappy',
	'Happy',
	'Neutral',
	'Unhappy',
	'VeryUnhappy'
]);

export const getSmileyUrl = state => {
	const moods = createMoods();
	const index = moods.length - state.rating;
	return `/public/assets/${moods[index]}.svg`;
};

export const getFeedbackText = state => {
	switch (state.rating) {
		case 5:
			return 'Awesome! Thanks for your Feedback.';
		case 4:
			return 'Great! Thanks for your Feedback.';
		case 3:
			return 'OK... things could be better. Thank you for your Feedback.';
		case 2:
			return 'Mmmmh, things should improve. Thank you for your Feedback.';
		case 1:
			return 'Oops, something needs to change. Thank you for your Feedback.';
		default:
			return '';
	}
};
