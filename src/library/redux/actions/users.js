import axios from 'axios';

import server from 'res/server';

export const getUsers = () => {
	return {
		type: 'GET_USERS',
		payload: axios.get(`${server.api}/users`)
	}
}