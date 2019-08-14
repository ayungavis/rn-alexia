const initialState = {
	data: [],
	isLogin: false,
	isLoading: false,
}

export default register = (state = initialState, action) => {
	switch(action.type) {
		case 'POST_REGISTER_PENDING':
			return {
				...state,
				isLoading: true,
				isLogin: false
			}

		case 'POST_REGISTER_REJECTED':
			return {
				...state,
				isLoading: false,
				isLogin: false
			}

		case 'POST_REGISTER_FULFILLED':
			return {
				...state,
				isLoading: false,
				isLogin: true,
				data: action.payload.data
			}

		default: 
			return state;
	}
}