import React from 'react';
import { makeClassNames } from '../redux/selectors';

const Scrollbar = ({ question, handleScoreChange, selected, handleMouseEnter, handleMouseLeave }) => (
	<div className="scrollbar-container">
		<div className="scroller-wrapper">
			{
				[1, 2, 3, 4, 5].map(num => (
					<div
						data-id={question.id}
						className="star-wrapper"
						value={num}
						key={num}
						onClick={handleScoreChange}
					>
						<div data-val={num} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`${makeClassNames(num)} ${(selected === num) ? 'selected' : null}`}>
							<img src="/public/assets/StarIcon.svg" />
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
