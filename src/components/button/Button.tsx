import styled from 'styled-components';

type ButtonStyleType = {
	color?: string;
	bgColor?: string;
	border?: string;
	position?: string;
	top?: string;
	right?: string;
	padding?: string;
};

type ButtonType = {
	title: string;
} & ButtonStyleType;

function Button(props: ButtonType) {
	return <StyledBtn {...props}>{props.title}</StyledBtn>;
}

const StyledBtn = styled.button<ButtonStyleType>`
	font-family: 'Inter', sans-serif;
	font-size: 16px;
	font-weight: 700;
	border-radius: 8px;
	cursor: pointer;
	padding: ${props => props.padding || '12px 40px'};
	color: ${props => props.color || '#090f1d'};
	background-color: ${props => props.bgColor || '#D3F85A'};
	border: ${props => props.border || 'none'};
	position: ${props => props.position || 'static'};
	top: ${props => props.top || 'auto'};
	right: ${props => props.right || 'auto'};
`;

export default Button;
