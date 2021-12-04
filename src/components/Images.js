import Photos from './Photos';
import useAxiosImages from './useAxiosImages';

const Images = ({ keyword }) => {
	const { data, isPending, error } = useAxiosImages(keyword);
	return (
		<div className='Images'>
			{isPending && <p>Images Loading...</p>}
			{error && <p>Sorry... Could not find from the resource</p>}
			{!isPending && !error && (
				<Photos photos={data.data.photos} keyword={keyword} />
			)}
		</div>
	);
};

export default Images;
