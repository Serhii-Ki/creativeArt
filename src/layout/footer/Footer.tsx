import styled from 'styled-components';
import FooterBottom from './footerBottom/FooterBottom';
import FooterTop from './footerTop/FooterTop';

function Footer() {
	return (
		<StyledFooter>
			<FooterTop />
			<Line />
			<FooterBottom />
		</StyledFooter>
	);
}

const StyledFooter = styled.footer`
	padding: 180px 0 90px 0;
`;

const Line = styled.div`
	width: 100%;
	height: 1px;
	background-color: #838382;
	margin: 40px 0;
`;

export default Footer;
