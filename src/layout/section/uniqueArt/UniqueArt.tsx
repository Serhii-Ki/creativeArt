import styled from 'styled-components';
import Button from '../../../components/button/Button';
import { FlexContainer } from '../../../components/flexContainer/FlexContainer';
import { GreenText } from '../../../components/greenText/GreenText';
import Card from './card/Card';

import firstImg from '../../../assets/unicue_art1.jpg';
import secondImg from '../../../assets/unicue_art2.jpg';
import thirdImg from '../../../assets/unicue_art3.jpg';

const cards = [
	{
		title: 'Cyberpunk Cocomo',
		img: firstImg,
	},
	{
		title: 'Charge, Qi tiao yu',
		img: secondImg,
	},
	{
		title: 'Surgeon, Josh Rife',
		img: thirdImg,
	},
];

function UniqueArt() {
	return (
		<section>
			<FlexContainer align='end' style={{ marginBottom: '60px' }}>
				<StyledTitle>
					<GreenText>Amazing</GreenText> and Super <br /> Unique Art of This{' '}
					<GreenText>Week</GreenText>
				</StyledTitle>
				<Button title='See All' />
			</FlexContainer>
			<FlexContainer gapColum='20px' gapRow='26px' wrap='wrap'>
				{cards.map(item => (
					<Card title={item.title} img={item.img} />
				))}
			</FlexContainer>
		</section>
	);
}

const StyledTitle = styled.h2`
	text-align: start;
	font-size: 48px;
	font-weight: 500;
	line-height: 120%;
`;

export default UniqueArt;
