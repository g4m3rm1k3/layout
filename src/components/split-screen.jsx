import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	align-items: stretch;
	min-height: 100vh;
	height: 100%;
`;
const Panel = styled.div`
	flex: ${(props) => props.flex};
	background-color: ${(props) => props.backgroundColor};
`;

export const SplitScreen = ({ children, leftWidth = 1, rightWidth = 1 }) => {
	const [left, right] = children;
	return (
		<Container>
			<Panel
				flex={leftWidth}
				backgroundColor={'red'}
			>
				{left}
			</Panel>
			<Panel
				flex={rightWidth}
				backgroundColor={'blue'}
			>
				{right}
			</Panel>
		</Container>
	);
};
