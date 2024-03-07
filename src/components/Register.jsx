import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import registerSubmit from "../utils/registerSubmit";

export default function Register() {
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')
	const dispatch = useDispatch()
	const user = useSelector(state => state.user)
	const err = useSelector(state => state.err)

	const handleSubmit = async (e) => {
		e.preventDefault()
		dispatch(registerSubmit({ email, password }))
	}

	if (user) {
		return <Navigate to='/' />
	}

	return (
		<div style={{ justifyContent: 'center', alignItems: 'center' }} className="wrapper">
			<form onSubmit={handleSubmit} className="form">
				<div className="form__container">
					<div className="form__email">
						<label htmlFor="email">E-mail</label>
						<input value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" type="email" ></input>
					</div>
					<div className="form__password">
						<label htmlFor="password">Пароль</label>
						<input value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" type="password" ></input>
					</div>
					{err && <div className="form__error">
						<span>{err}</span>
					</div>}
					<div style={{ display: "flex", justifyContent: "space-between", marginTop: 50, padding: "0px 17px" }}>
						<Link style={{ color: '#00A8CC' }} to="/login">Войти</Link>
						<button disabled={!email || !password} type="submit" className="button form__button">Зарегаться</button>
					</div>
				</div>
			</form>
		</div>
	)
}