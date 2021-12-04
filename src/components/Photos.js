import './Photos.scss';

const Photos = ({ photos, keyword }) => {
	let content = '';
	if (photos.length > 1) {
		content = (
			<>
				<h3>Photos of {keyword}</h3>
				<div className='response-data'>
					{photos.map((photo, index) => (
						<figure key={`photo-${index}`} className='figure'>
							<img
								src={photo.src.small}
								alt={`${keyword} by ${photo.photographer}`}
							/>
							<figcaption className='figcaption'>{`${keyword} by ${photo.photographer}`}</figcaption>
						</figure>
					))}
				</div>
			</>
		);
	} else {
		content = <p>No images found for {keyword}</p>;
	}
	return <div className='Photos'>{content}</div>;
};

export default Photos;
