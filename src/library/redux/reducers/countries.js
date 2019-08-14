const initialState = {
	data: [],
	isLoading: false,
}

export default countries = (state = initialState, action) => {
	switch(action.type) {
		case 'GET_COUNTRIES_PENDING':
			return {
				isLoading: true
			}

		case 'GET_COUNTRIES_REJECTED':
			return {
				isLoading: false
			}

		case 'GET_COUNTRIES_FULFILLED':
			return {
				isLoading: false,
				data: action.payload.data,
			}

		default:
			return state;
	}
}