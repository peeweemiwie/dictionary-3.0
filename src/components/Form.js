import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Form.scss';

const Form = ({ onReceivedKeyword, keyword }) => {
	const [value, setValue] = useState(keyword);
	const [searchParams, setSearchParams] = useSearchParams({});

	const handleSubmit = (event) => {
		event.preventDefault();
		onReceivedKeyword(value);
		let query = value;
		setSearchParams({ query });
	};
	useEffect(() => {
		setValue(keyword);
		let query = keyword;
		setSearchParams({ query });
		console.log(searchParams);
	}, [keyword]);

	return (
		<form
			className='Form'
			aria-label='Enter a word to search'
			onSubmit={handleSubmit}
		>
			<label htmlFor='dictionary' className='label'>
				Enter a word to search
			</label>
			<input
				autoFocus='on'
				className='input'
				type='search'
				name='dictionary'
				id='dictionary'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
		</form>
	);
};

export default Form;
