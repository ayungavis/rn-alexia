import axios from 'axios';

import server from 'res/server';

export const getTop = () => {
	return {
		type: 'GET_TOP',
		payload: axios.get(`${server.api}/top`)
	}
}