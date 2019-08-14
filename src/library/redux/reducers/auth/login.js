const initialState = {
	data: [],
	isLogin: false,
	isLoading: false,
}

export default login = (state = initialState, action) => {
	switch(action.type) {
		case 'POST_LOGIN_PENDING':
			return {
				...state,
				isLoading: true,
				isLogin: false
			}

		case 'POST_LOGIN_REJECTED':
			return {
				...state,
				isLoading: false,
				isLogin: false
			}

		case 'POST_LOGIN_FULFILLED':
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