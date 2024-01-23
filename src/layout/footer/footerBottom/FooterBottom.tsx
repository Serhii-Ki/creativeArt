import styled from 'styled-components';
import { FlexContainer } from '../../../components/flexContainer/FlexContainer';

function FooterBottom() {
	const currentYear = new Date().getFullYear();

	return (
		<StyledFlexContainer>
			<p>© Copyright {currentYear} - Creativeart</p>
			<StyledLinkContainer gapColum='25px'>
				<a href='#/'>Privacy Policy</a>
				<a href='#/'>Terms & Conditions</a>
			</StyledLinkContainer>
		</StyledFlexContainer>
	);
}

const StyledFlexContainer = styled(FlexContainer)`
	@media screen and (max-width: 768px) {
		flex-direction: column;
		gap: 15px;
	}
`;

const StyledLinkContainer = styled(FlexContainer)`
	@media screen and (max-width: 400px) {
		flex-direction: column;
		gap: 8px;
	}
`;

export default FooterBottom;
