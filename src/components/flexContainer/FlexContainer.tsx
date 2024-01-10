import styled from 'styled-components';

type FlexContainerType = {
	direction?: string;
	justify?: string;
	align?: string;
	wrap?: string;
	gapRow?: string;
	gapColum?: string;
};

export const FlexContainer = styled.div<FlexContainerType>`
	display: flex;
	flex-direction: ${props => props.direction || 'row'};
	justify-content: ${props => props.justify || 'space-between'};
	align-items: ${props => props.align || 'center'};
	flex-wrap: ${props => props.wrap || 'nowrap'};
	row-gap: ${props => props.gapRow || '0'};
	column-gap: ${props => props.gapColum || '0'};
`;
