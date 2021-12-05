import useAxios from './useAxios';
import Definitions from './Definitions';
import './Meanings.scss';
const Meanings = ({ keyword, handleClickedWord }) => {
	const dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
	const { data, isPending, error } = useAxios(dictionaryApiUrl);
	// if (!isPending && !error) {
	// 	const meanings = data.data[0].meanings;
	// }

	return (
		<section className='Meanings'>
			{isPending && <p>Loading...</p>}
			{error && <p>Sorry... Could not find from the resource</p>}
			{!isPending &&
				!error &&
				data.data[0].meanings.map((meaning, index) => (
					<div className='meaning' key={`meaning-${index}`}>
						<h3 className='section-title'>{meaning.partOfSpeech}</h3>
						<Definitions
							definitions={meaning.definitions}
							handleClickedWord={handleClickedWord}
						/>
					</div>
				))}
		</section>
	);
};

export default Meanings;
