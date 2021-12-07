import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from '../src/components/Form';
import Dictionary from '../src/components/Dictionary';
import Images from '../src/components/Images';
import Navigation from '../src/components//Navigation';
import Meanings from '../src/components//Meanings';
import './App.scss';

const App = () => {
	const [keyword, setKeyword] = useState('cat');
	const onReceivedKeyword = (word) => {
		setKeyword(word);
	};

	return (
		<div className='App'>
			<Form onReceivedKeyword={onReceivedKeyword} keyword={keyword} />
			<main className='main'>
				<Dictionary keyword={keyword} />
				<Navigation keyword={keyword} />
				<Routes>
					<Route
						path='/'
						element={
							<Meanings
								keyword={keyword}
								handleClickedWord={onReceivedKeyword}
							/>
						}
					/>
					<Route path='images/' element={<Images keyword={keyword} />} />
				</Routes>
			</main>
		</div>
	);
};

export default App;
