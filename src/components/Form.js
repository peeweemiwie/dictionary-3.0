import { useState } from 'react';
import './Form.scss';

const Form = ({ defaultValue, onReceivedKeyword }) => {
	const [value, setValue] = useState(defaultValue);

	const handleSubmit = (event) => {
		event.preventDefault();
		onReceivedKeyword(value);
	};

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
