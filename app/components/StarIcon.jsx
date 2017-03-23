import React from 'react';

const StarIcon = ({ fill }) => (

	<svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
	    <g id="ButterflyExercise" stroke="none" strokeWidth="1" fill={fill} fillRule="evenodd">
	        <g id="Page1" transform="translate(-323.000000, -366.000000)" fill="#FFFFFF">
	            <g id="Group-6" transform="translate(76.000000, 242.000000)">
	                <g id="Slider" transform="translate(43.000000, 114.000000)">
	                    <polygon id="StarIcon" points="215 10 218.399 16.9405417 226 18.053375 220.5 23.4552917 221.798458 31.0833333 215 27.4822083 208.202 31.0833333 209.5 23.4552917 204 18.053375 211.600542 16.9405417"></polygon>
	                </g>
	            </g>
	        </g>
	    </g>
	</svg>

)

StarIcon.propTypes = {
	fill: React.PropTypes.string
}

StarIcon.defaultProps = {
	fill: 'none'
}

export default StarIcon;
