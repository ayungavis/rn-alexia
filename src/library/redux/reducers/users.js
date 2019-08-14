const initialState = {
	data: [],
	isLoading: false,
}

export default users = (state = initialState, action) => {
	switch(action.type) {
		case 'GET_USERS_PENDING':
			return {
				isLoading: true
			}

		case 'GET_USERS_REJECTED':
			return {
				isLoading: false
			}

		case 'GET_USERS_FULFILLED':
			return {
				isLoading: false,
				data: action.payload.data,
			}

		default:
			return state;
	}
}