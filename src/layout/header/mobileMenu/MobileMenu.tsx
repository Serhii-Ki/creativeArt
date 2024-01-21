import { useState } from 'react';
import styled, { css } from 'styled-components';
import { FlexContainer } from '../../../components/flexContainer/FlexContainer';
import Logo from '../../../components/logo/Logo';
import Menu from '../../../components/menu/Menu';
import { menuItems } from '../Header';
import MobileBtn from './mobileBtn/MobileBtn';

function MobileMenu() {
	const [isOpen, setModal] = useState(false);

	const handelModal = () => {
		setModal(!isOpen);
	};

	return (
		<FlexContainer>
			<Logo />
			<MobileBtn isOpen={isOpen} handelModal={handelModal} />
			<Popup isOpen={isOpen}>
				<Menu listItems={menuItems} />
			</Popup>
		</FlexContainer>
	);
}

const Popup = styled.div<{ isOpen: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 5;
	background-color: rgba(31, 31, 32, 0.95);
	opacity: 0;
	pointer-events: none;
	transition: opacity 0.5s ease-in-out;

	${props =>
		props.isOpen &&
		css<{ isOpen: boolean }>`
			opacity: 1;
			pointer-events: auto;
		`}
`;

export default MobileMenu;
