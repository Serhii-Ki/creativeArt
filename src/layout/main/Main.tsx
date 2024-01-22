import styled from 'styled-components';
import MainInfo from './mainInfo/MainInfo';
import MainPicture from './mainPicture/MainPicture';

function Main() {
	return (
		<StyledMain>
			<MainInfo />
			<MainPicture />
		</StyledMain>
	);
}

const StyledMain = styled.main`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	padding: 120px 0 210px 0;

	@media screen and (max-width: 1070px) {
		padding: 60px 0 120px 0;
		justify-content: center;
		gap: 50px;
	}
`;

export default Main;
