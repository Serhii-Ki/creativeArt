import styled from 'styled-components';

type MenuType = {
	listItems: string[];
};

function Menu(props: MenuType) {
	return (
		<StyledMenu>
			{props.listItems.map((item, index) => (
				<li key={index}>
					<a href='#/'>{item}</a>
				</li>
			))}
		</StyledMenu>
	);
}

const StyledMenu = styled.ul`
	display: flex;
	gap: 40px;

	@media screen and (max-width: 980px) {
		flex-direction: column;
		gap: 50px;

		a {
			font-size: 38px;
		}
	}
`;

export default Menu;
