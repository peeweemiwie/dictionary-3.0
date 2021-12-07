import useAxios from './useAxios';
import WordOrigin from './WordOrigin';
import Phonetics from './Phonetics';
import './Dictionary.scss';

const Dictionary = ({ keyword }) => {
	const dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
	const { data, isPending, error } = useAxios(dictionaryApiUrl, keyword);

	return (
		<div className='Dictionary'>
			{isPending && <p>Loading...</p>}
			{error && <p>Sorry... Could not find from the resource</p>}
			{!isPending && !error && (
				<div className='card'>
					<WordOrigin word={data.data[0].word} origin={data.data[0].origin} />
					<Phonetics data={data.data[0].phonetics} />
				</div>
			)}
		</div>
	);
};

export default Dictionary;
