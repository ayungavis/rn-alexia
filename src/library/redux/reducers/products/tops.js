const initialState = {
	data: [],
	isLoading: false,
}

export default tops = (state = initialState, action) => {
	switch(action.type) {
		case 'GET_TOP_PENDING':
			return {
				isLoading: true
			}

		case 'GET_TOP_REJECTED':
			return {
				isLoading: false
			}

		case 'GET_TOP_FULFILLED':
			return {
				isLoading: false,
				data: action.payload.data
			}

		default:
			return state;
	}
}