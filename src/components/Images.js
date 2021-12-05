import Photos from './Photos';
import useAxiosImages from './useAxiosImages';

const Images = ({ keyword }) => {
	const { data, isPending, error } = useAxiosImages(keyword);
	return (
		<div className='Images'>
			{isPending && <p>Images Loading...</p>}
			{error && <p>Sorry... Could not find from the resource</p>}
			{!isPending && !error && data.data.photos.length >= 1 && (
				<Photos photos={data.data.photos} keyword={keyword} />
			)}
			{!isPending && !error && data.data.photos.length === 0 && (
				<p>Sorry... Could not find from the resource</p>
			)}
		</div>
	);
};

export default Images;
