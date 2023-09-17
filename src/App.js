import { Modal } from './components/Modal';
import { LargeAuthorListItem } from './components/authors/LargeListItems';
import { SmallAuthorListItem } from './components/authors/SmallListItems';
import { LargeBookListItem } from './components/books/LargeListItems';
import { SmallBookListItem } from './components/books/SmallListItems';
import { NumberedList } from './components/lists/Numbered';
import { RegularList } from './components/lists/Regular';
import { authors } from './data/authors';
import { books } from './data/books';

function App() {
	return (
		<>
			<Modal>
				<LargeBookListItem book={books[0]} />
			</Modal>
		</>
	);
}

export default App;
