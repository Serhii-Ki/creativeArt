import styled from 'styled-components';
import { FlexContainer } from '../../../../components/flexContainer/FlexContainer';

type MenuType = {
	title: string;
	listItems: string[];
};

function FooterMenu(props: MenuType) {
	return (
		<FlexContainer
			direction='column'
			gapRow='8px'
			align='flex-start'
			justify='flex-start'
		>
			<MenuTitleList>{props.title}</MenuTitleList>
			{props.listItems.map(item => (
				<Link href='#/'>{item}</Link>
			))}
		</FlexContainer>
	);
}

const MenuTitleList = styled.h3`
	font-size: 20px;
	font-weight: 700;
	line-height: 120%;
	margin-bottom: 16px;
`;

const Link = styled.a`
	cursor: pointer;
`;

export default FooterMenu;
