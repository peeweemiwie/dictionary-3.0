import './Photos.scss';

const Photos = ({ photos, keyword }) => {
	return (
		<div className='Photos'>
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
	);
};

export default Photos;
