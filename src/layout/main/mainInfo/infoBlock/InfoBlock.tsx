import styled from 'styled-components';
import { FlexContainer } from '../../../../components/flexContainer/FlexContainer';
import { GreenText } from '../../../../components/greenText/GreenText';

function InfoBlock() {
	return (
		<FlexContainer>
			<StyledBlock>
				<StyledCount>
					<GreenText>8.9</GreenText>K
				</StyledCount>
				<StyledName>Art work</StyledName>
			</StyledBlock>
		</FlexContainer>
	);
}

const StyledBlock = styled.div``;

const StyledCount = styled.p`
	font-size: 48px;
	font-weight: 500;
`;

const StyledName = styled.p`
	margin-top: 10px;
`;

export default InfoBlock;
