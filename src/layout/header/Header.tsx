import styled from 'styled-components';

import Button from '../../components/button/Button';
import { FlexContainer } from '../../components/flexContainer/FlexContainer';
import Logo from '../../components/logo/Logo';
import Menu from '../../components/menu/Menu';

const menuItems = ['Marketplace', 'Artists', 'Community', 'Collections'];

function Header() {
	return (
		<StyledHeader>
			<FlexContainer>
				<Logo />
				<Menu listItems={menuItems} />
				<Button title='Contact' />
			</FlexContainer>
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	padding-top: 25px;
`;

export default Header;
