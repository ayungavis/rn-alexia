const initialState = {
	data: [],
	isLoading: false,
}

export default categories = (state = initialState, action) => {
	switch(action.type) {
		case 'GET_CATEGORIES_PENDING':
			return {
				isLoading: true
			}

		case 'GET_CATEGORIES_REJECTED':
			return {
				isLoading: false
			}

		case 'GET_CATEGORIES_FULFILLED':
			return {
				isLoading: false,
				data: action.payload.data,
			}

		default:
			return state;
	}
}