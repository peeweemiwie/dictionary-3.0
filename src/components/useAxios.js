import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (url) => {
	const [data, setData] = useState([]);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get(url)
			.then((response) => {
				if (response.status !== 200) {
					throw Error('Could not find from the resource');
				} else {
					console.log('from useAxios: ', response);
					setData(response);
					setIsPending(false);
					setError(null);
				}
			})
			.catch((error) => {
				setError(error.message);
				setIsPending(false);
				setData(null);
			});
	}, [url]);
	return { data, isPending, error };
};

export default useAxios;
