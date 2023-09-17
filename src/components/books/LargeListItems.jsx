export const LargeBookListItem = ({ book }) => {
	const { name, price, title, pages } = book;
	return (
		<>
			<h2>Title: {name}</h2>
			<p>price: {price}</p>
			<h2>Author: {title}</h2>
			<p># of Pages: {pages}</p>
			<p>{'*'.repeat(40)}</p>
		</>
	);
};
