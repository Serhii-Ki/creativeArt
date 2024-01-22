import styled from 'styled-components';
import Button from '../../../components/button/Button';
import { FlexContainer } from '../../../components/flexContainer/FlexContainer';
import { GreenText } from '../../../components/greenText/GreenText';
import { font } from '../../../styles/Common';
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
			<ButtonFlexContainer justify='start' style={{ marginBottom: '70px' }}>
				<Button title='Explore Now' />
				<Button
					title='Learn More'
					bgColor='transparent'
					color='#D3F85A'
					padding='12px 0 12px 36px'
				/>
			</ButtonFlexContainer>
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
	@media screen and (max-width: 1070px) {
		text-align: center;
	}
	${font({ Fmax: 64, Fmin: 39, weight: 500 })}
`;

const StyledText = styled.p`
	margin-top: 20px;
	margin-bottom: 40px;
	line-height: 160%;
	flex-grow: 1;

	@media screen and (max-width: 1070px) {
		text-align: center;
	}
`;

const ButtonFlexContainer = styled(FlexContainer)`
	@media screen and (max-width: 1070px) {
		justify-content: center;
	}
`;

export default MainInfo;
