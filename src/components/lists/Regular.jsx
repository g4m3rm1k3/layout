export const RegularList = ({ items, sourceName, ItemComponent }) => {
	return (
		<>
			{items.map((item, i) => (
				<ItemComponent
					key={i}
					{...{ [sourceName]: item }}
				/>
			))}
			{'*'.repeat(30)}
		</>
	);
};
