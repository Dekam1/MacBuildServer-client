import ACTIONS from "../actions"

export default function setError(message) {
	return {
		type: ACTIONS.SET_ERROR,
		payload: message
	}
}