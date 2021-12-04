import './RelatedWords.scss';

const RelatedWords = ({ type, array, handleClickedWord }) => {
	return (
		<div className='RelatedWords'>
			<h4 className='group-title'>{type}</h4>
			<ul className='words'>
				{array.map((word, index) => (
					<li
						key={`${word}-${index}`}
						className={`word ${type}`}
						onClick={() => handleClickedWord(word)}
					>
						{word}
					</li>
				))}
			</ul>
		</div>
	);
};

export default RelatedWords;
