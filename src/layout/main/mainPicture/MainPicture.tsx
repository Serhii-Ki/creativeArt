import styled from 'styled-components';

import art from '../../../assets/main_icon.svg';
import img from '../../../assets/main_img.jpg';
import PictureAfter from './pictureAfter/PictureAfter';

function MainPicture() {
	return (
		<StyledPictureContainer>
			<StyledImgBefore src={art} />
			<StyledImg src={img} alt='Some hero' />
			<PictureAfter />
		</StyledPictureContainer>
	);
}

const StyledPictureContainer = styled.div`
	position: relative;
	width: 575px;
	height: 637px;
`;

const StyledImg = styled.img`
	display: block;
	width: 464px;
	height: 544px;
	border-radius: 24px;
	margin: 0 auto;
`;

const StyledImgBefore = styled.img`
	position: absolute;
	top: 50%;
	left: 0px;
	transform: translateY(-50%);
`;

export default MainPicture;
