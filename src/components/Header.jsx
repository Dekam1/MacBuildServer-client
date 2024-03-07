import { navData } from "../data";
import John from "../assets/img/John.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import setUser from "../store/actionCreators/setUser";

export default function Header() {
	const user = useSelector(state => state.user)
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(setUser(null))
		localStorage.removeItem('token')
	}

	return (
		<header className="header">
			<nav className="header__menu menu">
				<ul className="menu__list">
					{navData.map(item => (
						<li key={item.href} className="menu__item">
							<a className={item.type && "menu__button button"} href={item.href}>{item.text}</a>
						</li>
					))}
					{!user && <Link className="menu__button button" to="/login">Sign In</Link>}
					{user && <button onClick={handleClick} style={{ fontSize: 20, cursor: 'pointer' }} className="menu__button button">Sign Out</button>}
				</ul>
			</nav>
			<div className="container">
				<div className="header__body body">
					<div className="body__wrapper">
						<div className="body__left">
							<h1 className="body__title">Hi, I am John, Creative Technologist</h1>
							<p className="body__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
							<button className="button body__button">Download Resume</button>
						</div>
						<div className="body__right">
							<img width={248} src={John} alt="John" />
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}