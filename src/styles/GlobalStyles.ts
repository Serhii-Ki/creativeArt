import { createGlobalStyle } from 'styled-components';

import bg from '../assets/bg.png';

const GlobalStyles = createGlobalStyle`
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		position: relative;
		font-family: 'Inter', sans-serif;
		font-weight: 400;
		font-size: 16px;
    color: #FFFFFD;
		min-width: 360px;
		background-color: #0b0e16;

		&::after{
			content: '';
			background: url(${bg}) 0px -0.827px / 179.034% 100.035% no-repeat;
			mix-blend-mode: color-burn;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: -5;
			opacity: 0.5;
		}
}

	a {
		font-family: 'Inter', sans-serif;
		font-weight: 400;
		font-size: 16px;
		font-size: 20px;
		font-weight: 500;
		text-decoration: none;
		color: rgba(255, 255, 253, 0.72);
	}

	a:hover {
		color: #FFF;
		text-decoration: underline #D3F85A;
	}

	ul,
	li {
		list-style: none;
	}
`;

export default GlobalStyles;
