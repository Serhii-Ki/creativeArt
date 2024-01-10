import styled from 'styled-components';

import bg from '../../assets/bg.png';

export const Background = styled.div`
	width: 100%;
	height: 100vh;
	/* background: url(${bg}) center center/cover no-repeat;
	filter: brightness(20%); */
	background: url(${bg}), lightgray 0px -0.827px / 179.034% 100.035% no-repeat;
	mix-blend-mode: color-burn;
`;
