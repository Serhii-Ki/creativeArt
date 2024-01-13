import styled from 'styled-components';
import Button from '../../../components/button/Button';
import { FlexContainer } from '../../../components/flexContainer/FlexContainer';
import { GreenText } from '../../../components/greenText/GreenText';
import InfoBlock from './infoBlock/InfoBlock';

function MainInfo() {
	return (
		<StyledMainInfo>
			<StyledTitle>
				Discover and Collect The Best NFTs
				<GreenText> Digital Art.</GreenText>
			</StyledTitle>
			<StyledText>
				Get started with the easiest and most secure platform to buy and trade
				digital ART and NFT’s. Start exploring the world of digital art and NFTs
				today and take control of your digital assets with confidence!
			</StyledText>
			<FlexContainer justify='start' style={{ marginBottom: '70px' }}>
				<Button title='Explore Now' />
				<Button title='Learn More' bgColor='transparent' color='#D3F85A' />
			</FlexContainer>
			<InfoBlock />
		</StyledMainInfo>
	);
}

const StyledMainInfo = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 540px;
`;

const StyledTitle = styled.h1`
	font-size: 64px;
	font-weight: 500;
	line-height: 120%;
`;

const StyledText = styled.p`
	margin-top: 20px;
	margin-bottom: 40px;
	line-height: 160%;
`;

export default MainInfo;
