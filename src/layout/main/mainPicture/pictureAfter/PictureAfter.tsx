import styled from 'styled-components';
import Button from '../../../../components/button/Button';
import { FlexContainer } from '../../../../components/flexContainer/FlexContainer';
import { GreenText } from '../../../../components/greenText/GreenText';

function PictureAfter() {
	return (
		<StyledBlock>
			<FlexContainer style={{ marginBottom: '20px' }}>
				<FlexContainer
					direction='column'
					align='start'
					justify='center'
					gapRow='8px'
				>
					<GreenText>Ends in</GreenText>
					<StyledDate>05:45:47</StyledDate>
				</FlexContainer>
				<FlexContainer direction='column' align='start'>
					<GreenText>Current bid</GreenText>
					<StyledDate>0.24ETH</StyledDate>
				</FlexContainer>
			</FlexContainer>
			<Button
				title='Place A Bid'
				bgColor='transparent'
				color='#D3F85A'
				border='1px solid #D3F85A'
			/>
		</StyledBlock>
	);
}

const StyledBlock = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	transform: translate(20px, 50%);
	width: 304px;
	padding: 20px;
	border-radius: 16px;
	border-top: 1px solid #d3f85a;
	background: #131e3a;
	box-shadow: 0px 9px 50px 0px rgba(23, 36, 65, 0.04);
	text-align: center;

	@media screen and (max-width: 768px) {
		width: 224px;
		padding: 10px 20px;
	}
`;

const StyledDate = styled.span`
	font-weight: 700;
`;

export default PictureAfter;
