import { FlexContainer } from '../../../../components/flexContainer/FlexContainer';
import Icon from '../../../../components/icon/Icon';

function SocialMenu() {
	return (
		<FlexContainer gapColum='12px' justify='flex-start'>
			<Icon iconId='facebook' width='24px' height='24px' viewBox='0 0 24 24' />
			<Icon iconId='telegram' width='24px' height='24px' viewBox='0 0 24 24' />
			<Icon iconId='twitter' width='24px' height='24px' viewBox='0 0 24 24' />
			<Icon iconId='linkedin' width='24px' height='24px' viewBox='0 0 24 24' />
		</FlexContainer>
	);
}

export default SocialMenu;
