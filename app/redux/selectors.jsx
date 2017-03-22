export const getSmiley = state => {
	const moods = [
		'VeryHappy',
		'Happy',
		'Neutral',
		'Unhappy',
		'VeryUnhappy'
	];

	const index = moods.length - state.rating;
	return moods[index];
};
