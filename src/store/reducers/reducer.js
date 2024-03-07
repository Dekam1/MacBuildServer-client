import initialState from "../initialState";
import ACTIONS from "../actions";

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case ACTIONS.SET_USER:
			return {
				...state,
				user: action.payload
			}

		case ACTIONS.SET_ERROR:
			return {
				...state,
				err: action.payload
			}

		default: return state
	}
}