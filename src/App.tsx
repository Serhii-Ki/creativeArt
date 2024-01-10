import styled from 'styled-components';
import { Background } from './components/background/Background';
import GlobalStyles from './styles/GlobalStyles';

function App() {
	return (
		<Background>
			<GlobalStyles />
			<StyledContainer></StyledContainer>
		</Background>
	);
}

const StyledContainer = styled.div`
	max-width: 1240px;
	padding: 0 5px;
`;

export default App;
