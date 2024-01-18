import styled from 'styled-components';
import { FlexContainer } from '../../../components/flexContainer/FlexContainer';

import firstImg from '../../../assets/sibscribe_art1.png';
import secondImg from '../../../assets/sibscribe_art2.jpg';
import Button from '../../../components/button/Button';
import { GreenText } from '../../../components/greenText/GreenText';

function Subscribe() {
	return (
		<section>
			<FlexContainer>
				<StyledImgContainer>
					<FirstImg src={firstImg} />
					<SecondImg src={secondImg} />
				</StyledImgContainer>
				<SubscribeBlock>
					<StyledTitle>
						Subscribe And <GreenText>get our</GreenText>
						<GreenText> Updates</GreenText> Every Week
					</StyledTitle>
					<StyledText>
						We have a blog related to NFT so we can share thoughts and routines
						on our blog which is updated weekly
					</StyledText>
					<InputContainer>
						<StyledInput placeholder='Enter your e-mail' />
						<Button
							title='Subscribe'
							position='absolute'
							top='4px'
							right='2px'
						/>
					</InputContainer>
				</SubscribeBlock>
			</FlexContainer>
		</section>
	);
}

const StyledImgContainer = styled.div`
	position: relative;
	width: 630px;
	height: 458px;
`;

const FirstImg = styled.img`
	max-width: 410px;
	max-height: 376px;
	border-radius: 20px;
	position: absolute;
	left: 0;
	top: 0;
	transform: rotate(-11.188deg);
`;

const SecondImg = styled.img`
	max-width: 282px;
	max-height: 348px;
	border-radius: 16px;
	position: absolute;
	right: 0;
	bottom: 0;
`;

const SubscribeBlock = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	max-width: 520px;
`;

const StyledTitle = styled.h2`
	font-size: 48px;
	font-weight: 500;
	line-height: 120%;
`;

const StyledText = styled.p`
	margin-top: 20px;
	margin-bottom: 40px;
`;

const InputContainer = styled.div`
	position: relative;
	width: 100%;
`;

const StyledInput = styled.input`
	width: 100%;
	height: 54px;
	padding: 0 24px;
	align-items: center;
	border: none;
	background-color: #131e3a;
	color: rgba(255, 255, 253, 0.72);
	border-radius: 8px;
`;

export default Subscribe;
