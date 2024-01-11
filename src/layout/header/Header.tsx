import styled from 'styled-components';

import logo from '../../assets/logo.svg';
import Button from '../../components/button/Button';
import { FlexContainer } from '../../components/flexContainer/FlexContainer';
import Icon from '../../components/icon/Icon';
import Menu from '../../components/menu/Menu';

const menuItems = ['Marketplace', 'Artists', 'Community', 'Collections'];

function Header() {
	return (
		<StyledHeader>
			<FlexContainer>
				<Icon icon={logo} />
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
