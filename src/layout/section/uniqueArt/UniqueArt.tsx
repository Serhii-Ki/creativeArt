import styled from 'styled-components';
import Button from '../../../components/button/Button';
import { FlexContainer } from '../../../components/flexContainer/FlexContainer';
import { GreenText } from '../../../components/greenText/GreenText';
import Card from './card/Card';

import firstImg from '../../../assets/unicue_art1.jpg';
import secondImg from '../../../assets/unicue_art2.jpg';
import thirdImg from '../../../assets/unicue_art3.jpg';
import { font } from '../../../styles/Common';

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
		<GridContainer>
			<GridTitle>
				<GreenText>Amazing</GreenText> and Super <br /> Unique Art of This{' '}
				<GreenText>Week</GreenText>
			</GridTitle>
			<Button title='See All' />
			<FlexContainer
				gapColum='20px'
				gapRow='26px'
				wrap='wrap'
				justify='center'
				style={{ gridArea: 'card' }}
			>
				{cards.map(item => (
					<Card title={item.title} img={item.img} />
				))}
			</FlexContainer>
		</GridContainer>
	);
}

const GridContainer = styled.section`
	display: grid;
	grid-template-columns: 2fr 1fr;
	grid-auto-rows: auto;
	align-items: center;
	row-gap: 60px;
	grid-template-areas:
		'title btn'
		'card card';
`;

const GridTitle = styled.h2`
	grid-area: 'title';
	${font({ Fmax: 48, Fmin: 31, weight: 500 })}
`;

function GridUniqueArt() {
	return (
		<section>
			<FlexContainer align='end' style={{ marginBottom: '60px' }}>
				<StyledTitle>
					<GreenText>Amazing</GreenText> and Super <br /> Unique Art of This{' '}
					<GreenText>Week</GreenText>
				</StyledTitle>
				<Button title='See All' />
			</FlexContainer>
			<FlexContainer gapColum='20px' gapRow='26px' wrap='wrap' justify='center'>
				{cards.map(item => (
					<Card title={item.title} img={item.img} />
				))}
			</FlexContainer>
		</section>
	);
}

const StyledTitle = styled.h2`
	text-align: start;
	${font({ Fmax: 48, Fmin: 31, weight: 500 })}
`;

export default UniqueArt;
