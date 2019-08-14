const initialState = {
	data: [],
	isLoading: false,
}

export default payments = (state = initialState, action) => {
	switch(action.type) {
		case 'GET_PAYMENTS_PENDING':
			return {
				isLoading: true
			}

		case 'GET_PAYMENTS_REJECTED':
			return {
				isLoading: false
			}

		case 'GET_PAYMENTS_FULFILLED':
			return {
				isLoading: false,
				data: action.payload.data,
			}

		default:
			return state;
	}
}