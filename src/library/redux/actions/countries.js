import axios from 'axios';

import server from 'res/server';

export const getCountries = () => {
	return {
		type: 'GET_COUNTRIES',
		payload: axios.get(`${server.api}/countries`)
	}
}