import axios from 'axios';

import server from 'res/server';

export const getCities = () => {
	return {
		type: 'GET_CITIES',
		payload: axios.get(`${server.api}/cities`)
	}
}