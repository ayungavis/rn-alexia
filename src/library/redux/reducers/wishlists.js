const initialState = {
	data: [],
	isLoading: false,
}

export default wishlists = (state = initialState, action) => {
	switch(action.type) {
		case 'GET_WISHLISTS_PENDING':
			return {
				isLoading: true
			}

		case 'GET_WISHLISTS_REJECTED':
			return {
				isLoading: false
			}

		case 'GET_WISHLISTS_FULFILLED':
			return {
				isLoading: false,
				data: action.payload.data,
			}

		default:
			return state;
	}
}