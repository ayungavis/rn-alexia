import axios from 'axios';

import server from 'res/server';

export const getCollection = () => {
	return {
		type: 'GET_COLLECTION',
		payload: axios.get(`${server.api}/collection`)
	}
}