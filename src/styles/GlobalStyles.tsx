import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		width: 100%;
		min-height: 100vh;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    color: #FFFFFD;
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
