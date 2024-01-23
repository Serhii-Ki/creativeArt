import styled from 'styled-components';
import { FlexContainer } from '../../../components/flexContainer/FlexContainer';
import Logo from '../../../components/logo/Logo';
import FooterMenu from './footerMenu/FooterMenu';
import SocialMenu from './socialMenu/SocialMenu';

const firstMenuItems = {
	title: 'Explore',
	listItems: ['Art Sign In', 'Collectibles', 'Domain Name', 'Utility'],
};
const secondMenuItems = {
	title: 'Statistic',
	listItems: ['Ranking', 'Collectibles', 'Activity'],
};
const thirdMenuItems = {
	title: 'Company',
	listItems: ['About Us', 'Career', 'Support', 'Partners'],
};
const forthMenuItems = {
	title: 'Resources',
	listItems: ['Help Center', 'Platform Status', 'Blog'],
};

function FooterTop() {
	return (
		<StyledFlexContainer>
			<LeftSide>
				<Logo />
				<Text>
					Discover NFTs by category, track the latest drop, and and follow the
					collections you love. Enjoy it!
				</Text>
				<SocialMenu />
			</LeftSide>
			<MenuFlexContainer gapColum='90px' align='flex-start'>
				<FooterMenu
					title={firstMenuItems.title}
					listItems={firstMenuItems.listItems}
				/>
				<FooterMenu
					title={secondMenuItems.title}
					listItems={secondMenuItems.listItems}
				/>
				<FooterMenu
					title={thirdMenuItems.title}
					listItems={thirdMenuItems.listItems}
				/>
				<FooterMenu
					title={forthMenuItems.title}
					listItems={forthMenuItems.listItems}
				/>
			</MenuFlexContainer>
		</StyledFlexContainer>
	);
}

const StyledFlexContainer = styled(FlexContainer)`
	@media screen and (max-width: 1100px) {
		flex-direction: column;
	}
`;

const LeftSide = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 1100px) {
		width: 100%;
		flex-direction: row;
		justify-content: space-around;
		margin-bottom: 30px;
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		gap: 15px;
	}
`;

const MenuFlexContainer = styled(FlexContainer)`
	@media screen and (max-width: 768px) {
		flex-direction: column;
		gap: 40px;
	}
`;

const Text = styled.p`
	max-width: 270px;
	margin-bottom: 24px;
`;

export default FooterTop;
