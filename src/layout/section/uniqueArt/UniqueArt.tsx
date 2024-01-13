import styled from 'styled-components';
import Button from '../../../components/button/Button';
import { FlexContainer } from '../../../components/flexContainer/FlexContainer';
import { GreenText } from '../../../components/greenText/GreenText';

function UniqueArt() {
	return (
		<StyledArtSection>
			<FlexContainer align='end'>
				<StyledTitle>
					<GreenText>Amazing</GreenText> and Super <br /> Unique Art of This{' '}
					<GreenText>Week</GreenText>
				</StyledTitle>
				<Button title='See All' />
			</FlexContainer>
		</StyledArtSection>
	);
}

const StyledArtSection = styled.section``;

const StyledTitle = styled.h2`
	text-align: start;
	font-size: 48px;
	font-weight: 500;
`;

export default UniqueArt;
