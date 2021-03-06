import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosImages = (keyword) => {
	const pexelApiKey =
		'563492ad6f91700001000001513e63f102864b409905ee9db0684aae';
	const apiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=20`;
	const authorization = { Authorization: `Bearer ${pexelApiKey}` };
	const [data, setData] = useState([]);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		axios
			.get(apiUrl, { headers: authorization })
			.then((response) => {
				if (response.status !== 200) {
					throw Error('Could not find from the resource');
				} else {
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [keyword]);
	return { data, isPending, error };
};

export default useAxiosImages;
