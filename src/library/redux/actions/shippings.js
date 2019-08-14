import axios from 'axios';

import server from 'res/server';

export const getShippings = () => {
	return {
		type: 'GET_SHIPPINGS',
		payload: axios.get(`${server.api}/shippings`)
	}
}