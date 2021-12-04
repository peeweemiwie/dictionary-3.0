import './Phonetics.scss';

const Phonetics = ({ data }) => {
	return (
		<div className='Phonetics'>
			{data.map((item, index) => (
				<figure className='phonetic' key={'phonetic' + index}>
					<figcaption className='text'>{item.text}</figcaption>
					<audio className='audio' controls src={item.audio}>
						Your browser does not support the
						<code>audio</code> element.
					</audio>
				</figure>
			))}
		</div>
	);
};

export default Phonetics;
