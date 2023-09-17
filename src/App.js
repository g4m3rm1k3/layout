import { SplitScreen } from './components/split-screen';

const LeftSideComponent = () => {
	return <h2 style={{ backgroundColor: 'crimson' }}>I am Left</h2>;
};
const RightSideComponent = () => {
	return <h2 style={{ backgroundColor: 'burlywood' }}>I am Right</h2>;
};

function App() {
	return (
		<SplitScreen
			leftWidth={1}
			rightWidth={2}
		>
			<LeftSideComponent />
			<RightSideComponent />
		</SplitScreen>
	);
}

export default App;
