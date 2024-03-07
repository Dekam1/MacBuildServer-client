import ACTIONS from "../actions"

export default function setUser(user) {
	return {
		type: ACTIONS.SET_USER,
		payload: user
	}
}