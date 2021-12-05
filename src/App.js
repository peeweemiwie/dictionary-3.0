import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
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
			<main className='main'>
				<Routes>
					<Route
						path='/'
						element={
							<Dictionary
								keyword={keyword}
								handleClickedWord={onReceivedKeyword}
							/>
						}
					/>
					<Route path='/images' element={<Images keyword={keyword} />} />
				</Routes>
			</main>
		</div>
	);
};

export default App;
