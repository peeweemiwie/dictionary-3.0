const RelatedWords = ({ type, array }) => {
	return (
		<div className='RelatedWords'>
			<h4>{type}</h4>
			<div className='words'>
				{array.map((word, index) => (
					<span key={`${word}-${index}`} className='word'>
						{word}
					</span>
				))}
			</div>
		</div>
	);
};

export default RelatedWords;
