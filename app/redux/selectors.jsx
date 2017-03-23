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

// simulates fetching data from backend
export const createQuestions = () => ([
	{ id: 1, prompt: 'My direct manager gives me necessary support and clear objectives.' },
	{ id: 2, prompt: 'I like my work environment, and I believe it helps me perform at my best.' },
	{ id: 3, prompt: 'I feel like I have a healthy work/life balance.' },
	{ id: 4, prompt: 'I feel comfortable working and interacting with the colleagues on my team.' },
	{ id: 5, prompt: 'I am satisfied with my roles and responsibilities.'}
])

export const formatQuestions = questions => {
	questions.forEach(question => {
		question.score = 0;
		question.comment = '';
	})
	return questions;
}

export const shuffleArr = arr => {
	let currIndex = arr.length, tempVal, randIndex;
	while (currIndex) {
		randIndex = Math.floor(Math.random() * currIndex);
		currIndex--;
		tempVal = arr[currIndex];
		arr[currIndex] = arr[randIndex];
		arr[randIndex] = tempVal;
	}
	return arr;
}

export const makeClassNames = num => {
	let classes = 'star-img-parent';
	switch (num) {
		case 1:
			classes += ' left';
			break;
		case 2:
			classes += ' mid-left';
			break;
		case 3:
			classes += ' middle';
			break;
		case 4:
			classes += ' mid-right';
			break;
		case 5:
			classes += ' right';
			break;
		default:
			return classes;
	}
	return classes;
}

export const makeClassNamesFiller = (num, selected) => {
	let classes = 'star-wrapper ';
	return classes;
}
