import Definitions from './Definitions';

const Meanings = ({ meanings }) => {
	return (
		<section className='Meanings'>
			{meanings.map((meaning, index) => (
				<div className='meaning' key={'meaning' + index}>
					<div className='partOfSpeech'>{meaning.partOfSpeech}</div>
					<Definitions definitions={meaning.definitions} />
				</div>
			))}
		</section>
	);
};

export default Meanings;
