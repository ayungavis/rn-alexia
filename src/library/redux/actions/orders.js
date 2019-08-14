import axios from 'axios';

import server from 'res/server';

export const getCart = () => {
	return {
		type: 'GET_ORDERS',
		payload: axios.get(`${server.api}/orders`)
	}
}

export const addToCart = (body) => {
	return {
		type: 'ADD_TO_CART',
		payload: axios({
			method: 'post',
			url: `${server.api}/order`,
			data: body
		})
	}
}

export const updateCart = (id, body) => {
	return {
		type: 'UPDATE_CART',
		payload: axios({
			method: 'patch',
			url: `${server.api}/order/${id}`,
			data: body
		})
	}
} 

export const deleteCart = (id) => {
	return {
		type: 'DELETE_CART',
		payload: axios({
			method: 'delete',
			url: `${server.api}/order/${id}`
		})
	}
}