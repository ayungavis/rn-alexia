import axios from 'axios';

import server from 'res/server';

export const getWishlists = () => {
	return {
		type: 'GET_WISHLISTS',
		payload: axios.get(`${server.api}/wishlists`)
	}
}