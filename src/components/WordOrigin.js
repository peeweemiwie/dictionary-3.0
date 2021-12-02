const WordOrigin = ({ word, origin }) => {
	return (
		<div className='WordOrigin'>
			<div>{word}</div>
			<div className='origin'>{origin}</div>
		</div>
	);
};

export default WordOrigin;
