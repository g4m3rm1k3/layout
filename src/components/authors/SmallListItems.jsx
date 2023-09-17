export const SmallAuthorListItem = ({ author }) => {
	const { name, age } = author;
	return (
		<p>
			Name: {name}, age: {age}
		</p>
	);
};
