import styled from 'styled-components';
import { Background } from './components/background/Background';
import Footer from './layout/footer/Footer';
import Header from './layout/header/Header';
import Main from './layout/main/Main';
import CreateNft from './layout/section/createNft/CreateNft';
import PopularArtist from './layout/section/popularArtists/PopularArtist';
import Subscribe from './layout/section/subscribe/Subscribe';
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
				<Subscribe />
				<Footer />
			</StyledContainer>
		</Background>
	);
}

const StyledContainer = styled.div`
	text-align: start;
	max-width: 1300px;
	width: 100%;
	margin: 0 auto;
	padding: 0 10px;
`;

export default App;
