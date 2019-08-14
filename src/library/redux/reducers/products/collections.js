const initialState = {
	data: [],
	isLoading: false,
}

export default collections = (state = initialState, action) => {
	switch(action.type) {
		case 'GET_COLLECTION_PENDING':
			return {
				isLoading: true
			}

		case 'GET_COLLECTION_REJECTED':
			return {
				isLoading: false
			}

		case 'GET_COLLECTION_FULFILLED':
			return {
				isLoading: false,
				data: action.payload.data,
			}

		default:
			return state;
	}
}