import React from 'react';
import { makeClassNames, makeClassNamesFiller } from '../redux/selectors';

import StarIcon from './StarIcon';

const Scrollbar = ({ question, handleScoreChange, selected, handleMouseEnter, handleMouseLeave }) => (
	<div className="scrollbar-container">
		<div className="scroller-wrapper">
			{
				[1, 2, 3, 4, 5].map(num => (
					<div
						data-id={question.id}
						className={makeClassNamesFiller(num, selected)}
						value={num}
						key={num}
						onClick={handleScoreChange}
					>
						<div data-val={num} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`${makeClassNames(num)} ${(selected === num) ? 'selected' : null}`}>
							<StarIcon fill={(num === selected) ? 'red' : null} />
						</div>
					</div>
				))
			}
		</div>
		<div className="scroller-labels">
			<span>Disagree</span>
			<span>Agree</span>
		</div>
	</div>
);

export default Scrollbar;
