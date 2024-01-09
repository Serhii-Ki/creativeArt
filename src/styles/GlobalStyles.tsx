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
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    color: #FFFFFD;
		flex-shrink: 0;
    background: url(${bg}) lightgray 0px -0.827px / 179.034% 100.035% no-repeat;
    mix-blend-mode: color-burn;
}

	a {
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
