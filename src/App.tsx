import styled from 'styled-components';
import { Background } from './components/background/Background';
import Header from './layout/header/Header';
import Main from './layout/main/Main';
import GlobalStyles from './styles/GlobalStyles';

function App() {
	return (
		<Background>
			<GlobalStyles />
			<StyledContainer>
				<Header />
				<Main />
			</StyledContainer>
		</Background>
	);
}

const StyledContainer = styled.div`
	max-width: 1240px;
	margin: 0 auto;
	padding: 0 5px;
`;

export default App;
