import styled from 'styled-components';

type PictureType = {
	url: string;
	area: string;
};

export const PicturePopular = styled.div<PictureType>`
	position: relative;
	border-radius: 16px;
	background: url(${props => props.url}) center center/cover no-repeat;
	grid-area: ${props => props.area};
`;
