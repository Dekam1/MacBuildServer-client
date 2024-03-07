import Header from "../components/Header";
import Card from "../components/Card";
import WorkCard from "../components/WorkCard";

import { cardData, socialData, worksData } from "../data";
import { useSelector } from "react-redux";

export default function Main() {
	const user = useSelector(state => state.user)

	return (
		<div className="wrapper">
			<Header />
			<main className="main">
				<section className="main__section-1">
					<div className="container">
						<div className="main__header">
							<span>Recent posts</span>
							<a href="/">View all</a>
						</div>
						<ul className="main__list card">
							{cardData.map(item => (
								<Card key={item.title} {...item} />
							))}
						</ul>
					</div>
				</section>
				<section className="main__section-2">
					<div className="container">
						<div className="main__header">
							<span>Featured works</span>
						</div>
						<ul className="main__works works">
							{worksData.map(item => (
								<WorkCard key={item.type} {...item} />
							))}
						</ul>
					</div>
				</section>
			</main>
			<footer className="footer">
				<div className="footer__wrapper">
					<ul className="social">
						{socialData.map(item => (
							<li key={item.href} className="social__item">
								<a href={item.href}>
									<img src={item.img} alt="social" />
								</a>
							</li>
						))}
					</ul>
					<p className="footer__text">Copyright ©2020 All rights reserved</p>
				</div>
			</footer>
		</div>
	)
}