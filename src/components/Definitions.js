import RelatedWords from './RelatedWords';
import './Definitions.scss';

const Definitions = ({ definitions, handleClickedWord }) => {
	return (
		<ul className='Definitions'>
			{definitions.map((definition, index) => (
				<li className='definition card' key={`${definition}-${index}`}>
					<p className='card-title definition'>{definition.definition}</p>
					{(definition.antonyms.length > 1 ||
						definition.synonyms.length > 1) && (
						<div className='card-body'>
							{definition.antonyms.length > 1 && (
								<RelatedWords
									type='antonyms'
									array={definition.antonyms}
									handleClickedWord={handleClickedWord}
								/>
							)}
							{definition.synonyms.length > 1 && (
								<RelatedWords
									type='synonyms'
									array={definition.synonyms}
									handleClickedWord={handleClickedWord}
								/>
							)}
						</div>
					)}
				</li>
			))}
		</ul>
	);
};

export default Definitions;
