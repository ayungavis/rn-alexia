const initialState = {
	data: [],
	isLoading: false,
}

export default contacts = (state = initialState, action) => {
	switch(action.type) {
		case 'GET_CONTACTS_PENDING':
			return {
				isLoading: true
			}

		case 'GET_CONTACTS_REJECTED':
			return {
				isLoading: false
			}

		case 'GET_CONTACTS_FULFILLED':
			return {
				isLoading: false,
				data: action.payload.data,
			}

		default:
			return state;
	}
}