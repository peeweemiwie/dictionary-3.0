import { useState } from 'react';
import Form from '../src/components/Form';
import Dictionary from '../src/components/Dictionary';
import Images from '../src/components/Images';
import './App.scss';

const App = () => {
	const [keyword, setKeyword] = useState('general');
	const onReceivedKeyword = (word) => {
		setKeyword(word);
	};

	return (
		<div className='App'>
			<Form defaultValue='general' onReceivedKeyword={onReceivedKeyword} />
			<nav>navigation goes here</nav>
			<main className='main'>
				<Dictionary keyword={keyword} handleClickedWord={onReceivedKeyword} />
				<Images keyword={keyword} />
			</main>
		</div>
	);
};

export default App;
