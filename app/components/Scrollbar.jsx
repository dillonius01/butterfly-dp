import React from 'react';
import { makeStarClassNames, makeClassNamesFiller } from '../utils';

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
						<div
							data-val={num}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							className={`${makeStarClassNames(num, selected)}`}>
							<StarIcon fill={(num === selected) ? '#ffffff' : null} />
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
