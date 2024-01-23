import styled from 'styled-components';
import Button from '../../../../components/button/Button';
import { FlexContainer } from '../../../../components/flexContainer/FlexContainer';
import Icon from '../../../../components/icon/Icon';

type CardType = {
	img: string;
	title: string;
};

function Card(props: CardType) {
	return (
		<StyledCard>
			<StyledImg src={props.img} />
			<FlexContainer style={{ marginBottom: '18px' }}>
				<StyledTitle>{props.title}</StyledTitle>
				<StyledInfoIcon>
					<Icon iconId='arrow' width='24px' height='24px' /> 490ETH
				</StyledInfoIcon>
			</FlexContainer>
			<FlexContainer>
				<FlexContainer direction='column' align='left' gapRow='5px'>
					<StyledSpan>Ending In</StyledSpan>
					<StyledInfoIcon>
						<Icon iconId='clock' width='24px' height='24px' /> 03:24:56
					</StyledInfoIcon>
				</FlexContainer>
				<Button
					title='Place A Bid'
					bgColor='transparent'
					color='#D3F85A'
					border='1px solid #D3F85A'
				/>
			</FlexContainer>
		</StyledCard>
	);
}

const StyledCard = styled.div`
	width: 410px;
	padding: 20px;
	border-radius: 28px;
	border-top: 1px solid#D3F85A;
	background: #131e3a;

	@media screen and (max-width: 560px) {
		width: 343px;
	}
`;

const StyledImg = styled.img`
	display: block;
	margin: 0 auto 24px auto;
	width: 370px;
	height: 340px;
	border-radius: 16px;
	object-fit: cover;

	@media screen and (max-width: 560px) {
		width: 311px;
		height: 340px;
	}
`;

const StyledTitle = styled.h3`
	font-size: 24px;
	font-weight: 700;
`;

const StyledInfoIcon = styled.p`
	display: flex;
	gap: 5px;
	align-items: center;
	font-weight: 700;
`;

const StyledSpan = styled.span`
	font-size: 14px;
	color: #838382;
`;

export default Card;
