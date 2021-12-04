import { useState } from 'react';
import Dictionary from './Dictionary';
import Images from './Images';

const Page = () => {
	const [keyword, setKeyword] = useState('');
	const handleClickedWord = (word) => {
		setKeyword(word);
	};
	return (
		<section className='Page'>
			<nav>navigation goes here</nav>
			<main className='main'>
				<Dictionary keyword={keyword} handleClickedWord={handleClickedWord} />
				<Images keyword={keyword} />
			</main>
		</section>
	);
};

export default Page;
