const initialState = {
	data: [],
	isLoading: false,
}

export default orders = (state = initialState, action) => {
	switch(action.type) {
		case 'GET_ORDERS_PENDING':
			return {
				...state,
				isLoading: true
			}

		case 'GET_ORDERS_REJECTED':
			return {
				...state,
				isLoading: false
			}

		case 'GET_ORDERS_FULFILLED':
			return {
				...state,
				isLoading: false,
				data: action.payload.data,
				length: action.payload.data.length
			}

		case 'ADD_TO_CART_PENDING': 
			return {
				...state,
				isLoading: true
			}

		case 'ADD_TO_CART_REJECTED': 
			return {
				...state,
				isLoading: false
			}

		case 'ADD_TO_CART_FULFILLED': 
			return {
				...state,
				isLoading: false,
				data: [...state, action.payload.data]
			}

		case 'UPDATE_CART_PENDING':
			return {
				...state,
				isLoading: true,
			}

		case 'UPDATE_CART_REJECTED':
			return {
				...state,
				isLoading: false,
			}

		case 'UPDATE_CART_FULFILLED':
			return {
				...state,
				isLoading: false,
				// data: [...state, action.payload.data]
			}

		case 'DELETE_CART_PENDING': 
			return {
				...state,
				isLoading: true,
			}

		case 'DELETE_CART_REJECTED':
			return {
				...state,
				isLoading: false,
			}

		case 'DELETE_CART_FULFILLED':
			return {
				...state,
				isLoading: false,
			}

		default:
			return state;
	}
}