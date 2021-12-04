import Definitions from './Definitions';
import './Meanings.scss';
const Meanings = ({ meanings, handleClickedWord }) => {
	return (
		<section className='Meanings'>
			<h2 className='section-title'>Definition</h2>
			{meanings.map((meaning, index) => (
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
