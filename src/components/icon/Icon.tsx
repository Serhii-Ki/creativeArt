import styled from 'styled-components';
import iconsSprite from '../../assets/sprite_icons.svg';

type IconPropsType = {
	iconId: string;
	width?: string;
	height?: string;
	viewBox?: string;
};

function Icon(props: IconPropsType) {
	return (
		<Link href='#/'>
			<svg
				width={props.width || '120'}
				height={props.height || '120'}
				viewBox={props.viewBox || '0 0 24 24'}
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<use xlinkHref={`${iconsSprite}#${props.iconId}`} />
			</svg>
		</Link>
	);
}

const Link = styled.a`
	cursor: pointer;
	color: white;

	:hover {
		color: #d3f85a;
	}
`;

export default Icon;
