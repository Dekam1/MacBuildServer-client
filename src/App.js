import { Route, Routes } from "react-router";
import Main from "./components/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import setUser from "./store/actionCreators/setUser";

function App() {
	const dispatch = useDispatch()

	React.useEffect(() => {
		const token = localStorage.getItem('token') || ''
		const getAuth = async () => {
			if (token) {
				await axios('http://localhost:8000/api/user/authme', {
					headers: {
						Authorization: `Bearer ${token}`
					}
				})
					.then(({ data }) => dispatch(setUser(data)))
					.catch(() => localStorage.removeItem('token'))
			}
		}
		getAuth()
	}, [])

	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	);
}

export default App;
