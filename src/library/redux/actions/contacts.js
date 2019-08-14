import axios from 'axios';

import server from 'res/server';

export const getContacts = () => {
	return {
		type: 'GET_CONTACTS',
		payload: axios.get(`${server.api}/contacts`)
	}
}