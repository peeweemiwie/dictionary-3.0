import { useState, useEffect } from 'react';
// import Dictionary from './Dictionary';
// import Images from './Images';
import './Form.scss';

const Form = ({ defaultValue }) => {
	const [value, setValue] = useState(defaultValue);
	const [keyword, setKeyword] = useState(defaultValue);
	const [hasNewKeyword, setHasNewKeyword] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		setKeyword(value);
	};

	const handleClickedWord = (word) => {
		setKeyword(word);
		setValue(word);
	};

	useEffect(() => {
		if (keyword) setHasNewKeyword(true);
	}, [keyword]);

	return (
		<div>
			<form
				className='Form'
				aria-label='Enter a word to search'
				onSubmit={handleSubmit}
			>
				<label htmlFor='dictionary' className='label'>
					Enter a word to search
				</label>
				<input
					autofocus='on'
					className='input'
					type='search'
					name='dictionary'
					id='dictionary'
					value={value}
					onChange={(event) => setValue(event.target.value)}
				/>
			</form>
			{/* {hasNewKeyword && (
				<main>
					<Dictionary keyword={keyword} handleClickedWord={handleClickedWord} />
					<Images keyword={keyword} />
				</main>
			)} */}
		</div>
	);
};

export default Form;
