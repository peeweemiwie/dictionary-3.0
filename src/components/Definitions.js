import RelatedWords from './RelatedWords';

const Definitions = ({ definitions }) => {
	return (
		<ol className='Definitions'>
			{definitions.map((definition, index) => (
				<li className='definition' key={'definition' + index}>
					{definition.definition}
					{definition.antonyms.length > 1 && (
						<RelatedWords type='antonyms' array={definition.antonyms} />
					)}
					{definition.synonyms.length > 1 && (
						<RelatedWords type='synonyms' array={definition.synonyms} />
					)}
				</li>
			))}
		</ol>
	);
};

export default Definitions;
