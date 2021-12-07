import Figure from './Figure';
import './Modal.scss';
const Modal = ({
	src,
	keyword,
	photographer,
	altSize,
	webLink,
	func,
	id,
	closeModal,
}) => {
	return (
		<div className='Modal'>
			<button
				className='button btn-close btn-no-style'
				onClick={() => {
					closeModal();
				}}
			>
				<span className='material-icons-outlined'>highlight_off</span>
			</button>
			<Figure
				src={src}
				keyword={keyword}
				photographer={photographer}
				altSize={altSize}
				webLink={webLink}
				func={func}
				id={id}
			/>
		</div>
	);
};

export default Modal;
