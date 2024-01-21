import styled from 'styled-components';

import Button from '../../components/button/Button';
import { FlexContainer } from '../../components/flexContainer/FlexContainer';
import Logo from '../../components/logo/Logo';
import Menu from '../../components/menu/Menu';
import MobileMenu from './mobileMenu/MobileMenu';

export const menuItems = ['Marketplace', 'Artists', 'Community', 'Collections'];

function Header() {
	return (
		<StyledHeader>
			<DesktopMenu>
				<Logo />
				<Menu listItems={menuItems} />
				<Button title='Contact' />
			</DesktopMenu>
			<MobileMenu />
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	padding-top: 25px;
`;

const DesktopMenu = styled(FlexContainer)`
	@media screen and (max-width: 980px) {
		display: none;
	}
`;

export default Header;
