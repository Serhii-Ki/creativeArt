import styled from 'styled-components';
import { FlexContainer } from '../../../components/flexContainer/FlexContainer';

function FooterBottom() {
	const currentYear = new Date().getFullYear();

	return (
		<FlexContainer>
			<Copyright>© Copyright {currentYear} - Creativeart</Copyright>
			<FlexContainer gapColum='25px'>
				<a href='#/'>Privacy Policy</a>
				<a href='#/'>Terms & Conditions</a>
			</FlexContainer>
		</FlexContainer>
	);
}

const Copyright = styled.p``;

export default FooterBottom;
