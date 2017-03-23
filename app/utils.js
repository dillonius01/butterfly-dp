const getPositionClass = num => {
	switch (num) {
		case 1:
			return 'left';
		case 2:
			return 'mid-left';
		case 3:
			return 'middle';
		case 4:
			return 'mid-right';
		case 5:
			return 'right';
		default:
			return '';
	}
}

const getColor = selected => {
	switch (selected) {
		case 1:
			return '';
		case 2:
			return 'orange';
		case 3:
			return 'tangerine';
		default:
			return 'yellow';
	}
}

export const makeStarClassNames = (num, selected) => {
	let classes = 'star-img-parent ';
	const position = getPositionClass(num);
	classes += position;
	if (selected === num) {
		classes += ' selected'
	}
	if (selected === 1) {
		classes += ' worst';
	}
	if (selected === 5) {
		classes += ' best';
	}
	return classes;
}

export const makeClassNamesFiller = (num, selected) => {
	let classes = 'star-wrapper ';
	const color = getColor(selected);
	const position = getPositionClass(num);

	if (!selected || (num > selected)) {
		classes += '';
	} else if (num < selected) {
		classes += `${color} ${position}`
	} else {
		classes += `${position}-${color}`
	}

	return classes;
}
