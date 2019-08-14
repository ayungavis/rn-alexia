import axios from 'axios';

import server from 'res/server';

export const getProduct = (id) => {
	return {
		type: 'GET_PRODUCT',
		payload: axios.get(`${server.api}/product/${id}`)
	}
}