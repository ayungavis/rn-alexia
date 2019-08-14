import axios from 'axios';

import server from 'res/server';

export const getCategories = () => {
	return {
		type: 'GET_CATEGORIES',
		payload: axios.get(`${server.api}/categories`)
	}
}