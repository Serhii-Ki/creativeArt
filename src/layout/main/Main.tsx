import styled from 'styled-components';
import { FlexContainer } from '../../components/flexContainer/FlexContainer';
import MainInfo from './mainInfo/MainInfo';
import MainPicture from './mainPicture/MainPicture';

function Main() {
	return (
		<StyledMain>
			<FlexContainer>
				<MainInfo />
				<MainPicture />
			</FlexContainer>
		</StyledMain>
	);
}

const StyledMain = styled.main`
	padding: 120px 0 210px 0;
`;

export default Main;
