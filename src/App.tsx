import styled from 'styled-components';
import { Background } from './components/background/Background';
import Header from './layout/header/Header';
import Main from './layout/main/Main';
import CreateNft from './layout/section/createNft/CreateNft';
import PopularArtist from './layout/section/popularArtists/PopularArtist';
import UniqueArt from './layout/section/uniqueArt/UniqueArt';
import GlobalStyles from './styles/GlobalStyles';

function App() {
	return (
		<Background>
			<GlobalStyles />
			<StyledContainer>
				<Header />
				<Main />
				<UniqueArt />
				<CreateNft />
				<PopularArtist />
			</StyledContainer>
		</Background>
	);
}

const StyledContainer = styled.div`
	text-align: start;
	max-width: 1300px;
	width: 100%;
	margin: 0 auto;
	padding: 0 5px;
`;

export default App;
