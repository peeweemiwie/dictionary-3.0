import { useState } from 'react';
import Figure from './Figure';
import Modal from './Modal';
import './Photos.scss';

const Photos = ({ photos, keyword }) => {
	const [modal, setModal] = useState(false);
	const [newImage, setNewImage] = useState(null);
	const handleClick = (event) => {
		setNewImage({
			src: event.target.getAttribute('data-alt-size'),
			photographer: event.target.getAttribute('data-photographer'),
			webLink: event.target.getAttribute('data-web-link'),
		});
		setModal(true);
		document.body.style.overflow = 'hidden';
	};
	const closeModal = () => {
		setNewImage(null);
		setModal(false);
		document.body.style.overflow = 'unset';
	};
	return (
		<div className='Photos'>
			{photos.map((photo, index) => (
				<span key={photo.id}>
					<Figure
						src={photo.src.small}
						keyword={keyword}
						photographer={photo.photographer}
						altSize={photo.src.large}
						webLink={photo.photographer_url}
						func={handleClick}
					/>
				</span>
			))}
			{modal && newImage && (
				<Modal
					src={newImage.src}
					keyword={keyword}
					photographer={newImage.photographer}
					webLink={newImage.webLink}
					id={newImage.id}
					closeModal={closeModal}
				/>
			)}
		</div>
	);
};

export default Photos;
