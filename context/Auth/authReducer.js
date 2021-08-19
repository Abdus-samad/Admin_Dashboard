import {SET_USER, USER_ERROR} from '../Types';

const reducer = (state, action) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				user: action.payload,
				loading: false,
				isAuthenticated: true,
			};
		case USER_ERROR:
			return {
				...state,
				user: null,
				isAuthenticated: false,
				loading: false,
			};
	}
};

export default reducer;
