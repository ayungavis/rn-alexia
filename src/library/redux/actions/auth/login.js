import axios from 'axios';

import server from 'res/server';

export const postLogin = (body) => {
	return {
		type: 'POST_LOGIN',
		payload: axios({
			method: 'post',
			url: `${server.api}/login`,
			data: body
		})
	}
}