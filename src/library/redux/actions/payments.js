import axios from 'axios';

import server from 'res/server';

export const getPayments = () => {
	return {
		type: 'GET_PAYMENTS',
		payload: axios.get(`${server.api}/payments`)
	}
}