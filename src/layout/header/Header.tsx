import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from '../../components/button/Button';
import { FlexContainer } from '../../components/flexContainer/FlexContainer';
import Logo from '../../components/logo/Logo';
import Menu from '../../components/menu/Menu';
import MobileMenu from './mobileMenu/MobileMenu';

export const menuItems = ['Marketplace', 'Artists', 'Community', 'Collections'];

function Header() {
	const [width, setWidth] = useState(window.innerWidth);
	const breakpoint = 980;

	useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleWindowResize);
		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

	return (
		<StyledHeader>
			{width > breakpoint ? (
				<DesktopMenu>
					<Logo />
					<Menu listItems={menuItems} />
					<Button title='Contact' />
				</DesktopMenu>
			) : (
				<MobileMenu />
			)}
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
