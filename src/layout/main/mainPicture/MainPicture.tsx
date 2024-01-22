import styled from 'styled-components';

import art from '../../../assets/main_icon.svg';
import img from '../../../assets/main_img.jpg';
import PictureAfter from './pictureAfter/PictureAfter';

function MainPicture() {
	return (
		<StyledPictureContainer>
			<PictureAfter />
		</StyledPictureContainer>
	);
}

const StyledPictureContainer = styled.div`
	position: relative;
	width: 464px;
	height: 544px;
	border-radius: 28px;
	margin-right: 20px;
	background: url(${img}) center center/contain no-repeat;

	::before {
		content: '';
		position: absolute;
		bottom: 180px;
		right: 315px;
		width: 100%;
		height: 100%;
		background: url(${art}) center/contain no-repeat;
	}

	@media screen and (max-width: 768px) {
		max-width: 294px;
		max-height: 344px;
		border-radius: 16px;

		::before {
			width: 60%;
			height: 60%;
			bottom: 150px;
			right: 225px;
		}
	}
`;

export default MainPicture;
