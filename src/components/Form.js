import { useState } from 'react';
import './Form.scss';

const Form = ({ defaultValue, onReceivedKeyword }) => {
	const [value, setValue] = useState(defaultValue);
	// const [keyword, setKeyword] = useState(defaultValue);
	// const [hasNewKeyword, setHasNewKeyword] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		onReceivedKeyword(value);
		// setKeyword(value);
	};

	// const handleClickedWord = (word) => {
	// 	setKeyword(word);
	// 	setValue(word);
	// };

	// useEffect(() => {
	// 	if (keyword) setHasNewKeyword(true);
	// }, [keyword]);

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
