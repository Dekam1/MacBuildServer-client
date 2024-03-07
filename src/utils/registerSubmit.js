import axios from "axios";
import setUser from "../store/actionCreators/setUser";
import setError from "../store/actionCreators/setError";

export default function registerSubmit(data) {
	return async (dispatch) => {
		await axios.post('http://localhost:8000/api/user/register', data)
			.then(({ data }) => {
				dispatch(setUser(data))
				localStorage.setItem('token', data.token)
			})
			.catch(err => {
				const message = err.response?.data.message
				dispatch(setError(message))
			})
	}
}