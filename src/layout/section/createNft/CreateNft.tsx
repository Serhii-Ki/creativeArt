import styled from 'styled-components';
import Button from '../../../components/button/Button';
import { FlexContainer } from '../../../components/flexContainer/FlexContainer';
import { GreenText } from '../../../components/greenText/GreenText';

import firstImg from '../../../assets/create_art1.jpg';
import secondImg from '../../../assets/create_art2.jpg';
import { font } from '../../../styles/Common';

function CreateNft() {
	return (
		<section style={{ padding: '90px 0' }}>
			<StyledFlexWrap wrap='wrap'>
				<StyledFlexWrap direction='column' justify='center' align='start'>
					<StyledTitle>
						Create And Sell <br /> Your <GreenText>Best NFTs</GreenText>
					</StyledTitle>
					<StyledText>
						Start exploring the world of digital art and NFTs today and take
						control of your digital assets with confidence!
					</StyledText>
					<FlexContainer justify='start' style={{ marginBottom: '70px' }}>
						<Button title='Create Now' />
						<Button
							title='Learn More'
							bgColor='transparent'
							color='#D3F85A'
							padding='12px 0 12px 36px'
						/>
					</FlexContainer>
				</StyledFlexWrap>
				<StyledImgContainer>
					<StyledImgFirst src={firstImg} />
					<StyledImgSecond src={secondImg} />
				</StyledImgContainer>
			</StyledFlexWrap>
		</section>
	);
}

const StyledTitle = styled.h2`
	${font({ Fmax: 48, Fmin: 31, weight: 500 })}
`;

const StyledText = styled.p`
	margin-top: 20px;
	margin-bottom: 40px;
	line-height: 160%;
	max-width: 425px;
`;

const StyledFlexWrap = styled(FlexContainer)`
	@media screen and (max-width: 1200px) {
		flex-direction: column;
		align-items: center;
	}
`;

const StyledImgContainer = styled.div`
	position: relative;
	width: 740px;
	height: 559px;
	@media screen and (max-width: 775px) {
		width: 343px;
		height: 260px;
	}
`;

const StyledImgFirst = styled.img`
	position: absolute;
	top: 0;
	right: 0;
	max-width: 410px;
	max-height: 400px;
	border-radius: 24px;

	@media screen and (max-width: 775px) {
		width: 190px;
		height: 220px;
		border-radius: 16px;
	}
`;

const StyledImgSecond = styled.img`
	position: absolute;
	bottom: 0;
	left: 0;
	max-width: 410px;
	max-height: 475px;
	border-radius: 24px;

	@media screen and (max-width: 775px) {
		width: 190px;
		height: 186px;
		border-radius: 16px;
	}
`;

export default CreateNft;
