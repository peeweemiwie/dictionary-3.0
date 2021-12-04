import './WordOrigin.scss';

const WordOrigin = ({ word, origin }) => {
	return (
		<div className='WordOrigin'>
			<h2 className='h2'>{word}</h2>
			<p className='origin'>Origin: {origin}</p>
		</div>
	);
};

export default WordOrigin;
