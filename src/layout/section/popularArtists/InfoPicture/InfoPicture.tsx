import { styled } from 'styled-components';
import { FlexContainer } from '../../../../components/flexContainer/FlexContainer';

type InfoType = {
	img: string;
	name: string;
};

function InfoPicture(props: InfoType) {
	return (
		<ContainerInfo>
			<StyledImg src={props.img} />
			<FlexContainer direction='column' align='start'>
				<p>Owner</p>
				<StyledName>{props.name}</StyledName>
			</FlexContainer>
		</ContainerInfo>
	);
}

const ContainerInfo = styled.div`
	position: absolute;
	bottom: 24px;
	left: 24px;
	display: flex;
	gap: 12px;
`;

const StyledImg = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 48px;
`;

const StyledName = styled.h3`
	font-size: 16px;
	font-weight: 700;
	line-height: 120%;
`;

export default InfoPicture;
