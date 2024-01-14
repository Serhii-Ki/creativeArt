import styled from 'styled-components';
import Button from '../../../components/button/Button';
import { FlexContainer } from '../../../components/flexContainer/FlexContainer';
import { GreenText } from '../../../components/greenText/GreenText';
import Card from './card/Card';

import firstImg from '../../../assets/unicue_art1.jpg';

function UniqueArt() {
	return (
		<StyledArtSection>
			<FlexContainer align='end' style={{ marginBottom: '60px' }}>
				<StyledTitle>
					<GreenText>Amazing</GreenText> and Super <br /> Unique Art of This{' '}
					<GreenText>Week</GreenText>
				</StyledTitle>
				<Button title='See All' />
			</FlexContainer>
			<Card title='Cyberpunk Cocomo' img={firstImg} />
		</StyledArtSection>
	);
}

const StyledArtSection = styled.section``;

const StyledTitle = styled.h2`
	text-align: start;
	font-size: 48px;
	font-weight: 500;
	line-height: 120%;
`;

export default UniqueArt;
