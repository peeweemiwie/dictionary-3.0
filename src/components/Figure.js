import './Figure.scss';

const Figure = ({ src, keyword, photographer, altSize, webLink, func, id }) => {
	return (
		<figure className='Figure' onClick={func} key={id}>
			<img
				className='img'
				src={src}
				alt={`${keyword} by ${photographer}`}
				data-alt-size={altSize}
				data-photographer={photographer}
				data-web-link={webLink}
				data-id={id}
			/>
			<figcaption className='figcaption'>
				{`${keyword} by ${photographer}`}:{' '}
				{webLink && (
					<a
						href={`${webLink}`}
						target='_blank'
						rel='noopener noreferrer'
						className='link'
					>
						visit
					</a>
				)}
			</figcaption>
		</figure>
	);
};

export default Figure;
