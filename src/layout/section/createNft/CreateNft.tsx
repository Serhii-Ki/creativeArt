import styled from 'styled-components';
import Button from '../../../components/button/Button';
import { FlexContainer } from '../../../components/flexContainer/FlexContainer';
import { GreenText } from '../../../components/greenText/GreenText';

import firstImg from '../../../assets/create_art1.jpg';
import secondImg from '../../../assets/create_art2.jpg';

function CreateNft() {
	return (
		<section style={{ padding: '90px 0' }}>
			<FlexContainer wrap='wrap'>
				<FlexContainer direction='column' justify='center' align='start'>
					<StyledTitle>
						Create And Sell <br />
						Your <GreenText>Best NFTs</GreenText>
					</StyledTitle>
					<StyledText>
						Start exploring the world of digital art and NFTs today and take
						control of your digital assets with confidence!
					</StyledText>
					<FlexContainer justify='start' style={{ marginBottom: '70px' }}>
						<Button title='Create Now' />
						<Button title='Learn More' bgColor='transparent' color='#D3F85A' />
					</FlexContainer>
				</FlexContainer>
				<StyledImgContainer>
					<StyledImgFirst src={firstImg} />
					<StyledImgSecond src={secondImg} />
				</StyledImgContainer>
			</FlexContainer>
		</section>
	);
}

const StyledTitle = styled.h2`
	font-size: 48px;
	font-weight: 500;
	line-height: 120%;
`;

const StyledText = styled.p`
	margin-top: 20px;
	margin-bottom: 40px;
	line-height: 160%;
	max-width: 425px;
`;

const StyledImgContainer = styled.div`
	position: relative;
	width: 740px;
	height: 559px;
`;

const StyledImgFirst = styled.img`
	position: absolute;
	top: 0;
	right: 0;
	max-width: 410px;
	max-height: 400px;
	border-radius: 24px;
`;

const StyledImgSecond = styled.img`
	position: absolute;
	bottom: 0;
	left: 0;
	max-width: 410px;
	max-height: 475px;
	border-radius: 24px;
`;

export default CreateNft;
