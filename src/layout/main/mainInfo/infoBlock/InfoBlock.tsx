import styled from 'styled-components';
import { FlexContainer } from '../../../../components/flexContainer/FlexContainer';
import { GreenText } from '../../../../components/greenText/GreenText';
import { font } from '../../../../styles/Common';

function InfoBlock() {
	return (
		<FlexContainer justify='space-between'>
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
	white-space: nowrap;
	${font({ Fmax: 48, Fmin: 31, weight: 500 })}
`;

const StyledName = styled.p`
	margin-top: 7px;
`;

export default InfoBlock;
