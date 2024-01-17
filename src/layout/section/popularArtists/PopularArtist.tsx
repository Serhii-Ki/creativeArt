import styled from 'styled-components';
import Button from '../../../components/button/Button';
import { FlexContainer } from '../../../components/flexContainer/FlexContainer';
import { GreenText } from '../../../components/greenText/GreenText';

import img from '../../../assets/popular-min1.png';
import popular1 from '../../../assets/popular_art1.jpg';
import popular2 from '../../../assets/popular_art2.jpg';
import popular3 from '../../../assets/popular_art3.jpg';
import popular4 from '../../../assets/popular_art4.jpg';
import popular5 from '../../../assets/popular_art5.jpg';
import InfoPicture from './InfoPicture/InfoPicture';
import { PicturePopular } from './PicturesPopular/PicturePopular';

const cards = [
	{
		url: popular1,
		area: 'first',
		img,
		name: 'Osvaldo Percy',
	},
	{
		url: popular2,
		area: 'second',
		img,
		name: 'Ranson Sqiure',
	},
	{
		url: popular3,
		area: 'third',
		img,
		name: 'Cristio leo',
	},
	{
		url: popular4,
		area: 'forth',
		img,
		name: 'Sebastian waltan',
	},
	{
		url: popular5,
		area: 'fifth',
		img,
		name: 'Abraham Zack',
	},
];

function PopularArtist() {
	return (
		<StyledSection>
			<FlexContainer>
				<SectionTitle>
					Popular <GreenText>Artists</GreenText>
					<br />
					On This Week
				</SectionTitle>
				<Button title='See All' />
			</FlexContainer>
			<GridContainer>
				{cards.map(card => (
					<PicturePopular url={card.url} area={card.area}>
						<InfoPicture img={card.img} name={card.name} />
					</PicturePopular>
				))}
			</GridContainer>
		</StyledSection>
	);
}

const StyledSection = styled.section`
	padding: 180px 0;
`;

const SectionTitle = styled.h2`
	font-size: 48px;
	font-weight: 500;
	line-height: 120%;
`;

const GridContainer = styled.div`
	display: grid;
	margin-top: 60px;
	gap: 30px;
	grid-template-areas:
		'first first first second second second second second third third third third'
		'forth forth forth forth fifth fifth fifth fifth third third third third';
	grid-template-rows: repeat(2, 300px);
`;

export default PopularArtist;
