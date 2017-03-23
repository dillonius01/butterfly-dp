import React from 'react';

const Scrollbar = ({ question, handleScoreChange }) => (
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
						<img src="/public/assets/StarIcon.svg" />
					</div>
				))
			}
		</div>
		<div className="scroller-labels">
			<span>Agree</span>
			<span>Disagree</span>
		</div>
	</div>
);

export default Scrollbar;
