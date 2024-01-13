import styled from 'styled-components';
import { FlexContainer } from '../../../../components/flexContainer/FlexContainer';
import { GreenText } from '../../../../components/greenText/GreenText';

function InfoBlock() {
	return (
		<FlexContainer justify='start' gapColum='120px'>
			<StyledBlock>
				<StyledCount>
					<GreenText>8.9</GreenText>K
				</StyledCount>
				<StyledName>Art work</StyledName>
			</StyledBlock>
			<StyledBlock>
				<StyledCount>
					<GreenText>65</GreenText>K
				</StyledCount>
				<StyledName>Artist</StyledName>
			</StyledBlock>
			<StyledBlock>
				<StyledCount>
					<GreenText>87</GreenText>K
				</StyledCount>
				<StyledName>Collection</StyledName>
			</StyledBlock>
		</FlexContainer>
	);
}

const StyledBlock = styled.div`
	position: relative;

	&:not(:last-child) {
		::after {
			content: '';
			position: absolute;
			top: 0;
			right: -28px;
			width: 1px;
			height: 100%;
			background-color: #d3f85a;
		}
	}
`;

const StyledCount = styled.p`
	font-size: 48px;
	font-weight: 500;
`;

const StyledName = styled.p`
	margin-top: 7px;
`;

export default InfoBlock;
