import useAxios from './useAxios';
import WordOrigin from './WordOrigin';
import Phonetics from './Phonetics';
import Meanings from './Meanings';
import './Dictionary.scss';

const Dictionary = ({ keyword, handleClickedWord }) => {
	const dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
	const { data, isPending, error } = useAxios(dictionaryApiUrl);
	// console.log(keyword, ' from dictionary');
	return (
		<div className='Dictionary'>
			{isPending && <p>Loading...</p>}
			{error && <p>Sorry... Could not find from the resource</p>}
			{!isPending && !error && (
				<div className='response-data'>
					<WordOrigin word={data.data[0].word} origin={data.data[0].origin} />
					<Phonetics data={data.data[0].phonetics} />
					<Meanings
						meanings={data.data[0].meanings}
						handleClickedWord={handleClickedWord}
					/>
				</div>
			)}
		</div>
	);
};

export default Dictionary;
