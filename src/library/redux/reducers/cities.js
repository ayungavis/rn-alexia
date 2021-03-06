const initialState = {
	data: [],
	isLoading: false,
}

export default cities = (state = initialState, action) => {
	switch(action.type) {
		case 'GET_CITIES_PENDING':
			return {
				isLoading: true
			}

		case 'GET_CITIES_REJECTED':
			return {
				isLoading: false
			}

		case 'GET_CITIES_FULFILLED':
			return {
				isLoading: false,
				data: action.payload.data,
			}

		default:
			return state;
	}
}