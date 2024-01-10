import styled from 'styled-components';

type MenuType = {
	listItems: string[];
};

function Menu(props: MenuType) {
	return (
		<StyledMenu>
			{props.listItems.map(item => (
				<li>
					<a href='#/'>listItems.title</a>
				</li>
			))}
		</StyledMenu>
	);
}

const StyledMenu = styled.ul``;

export default Menu;
