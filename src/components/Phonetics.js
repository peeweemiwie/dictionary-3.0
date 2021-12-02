const Phonetics = ({ data }) => {
	return (
		<div className='Phonetics'>
			{data.map((item, index) => (
				<div className='phonetic' key={'phonetic' + index}>
					<div className='text'>{item.text}</div>
					<div className='audio'>{item.audio}</div>
				</div>
			))}
		</div>
	);
};

export default Phonetics;
