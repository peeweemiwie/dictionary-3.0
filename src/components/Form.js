import { useState } from 'react';
import axios from 'axios';
import WordOrigin from './WordOrigin';
import Phonetics from './Phonetics';
import Meanings from './Meanings';

const Form = () => {
	const [value, setValue] = useState('');
	const [data, setData] = useState(null);

	const handleDictionaryResponse = (response) => {
		// console.log('response', response);
		setData(response.data[0]);
		setValue('');
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`;
		axios.get(dictionaryApiUrl).then(handleDictionaryResponse);
	};

	return (
		<div>
			<form
				className='Form'
				aria-label='Enter a word to search'
				onSubmit={handleSubmit}
			>
				<label htmlFor='dictionary'>Enter a word to search</label>
				<input
					type='search'
					name='dictionary'
					id='dictionary'
					onChange={(event) => setValue(event.target.value)}
				/>
			</form>
			{data && (
				<section className='response-data'>
					<WordOrigin word={data.word} origin={data.origin} />
					<Phonetics data={data.phonetics} />
					<Meanings meanings={data.meanings} />
				</section>
			)}
		</div>
	);
};

export default Form;
