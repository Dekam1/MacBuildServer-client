export default function Card({ title, date, type, text }) {
	return (
		<li className="card__item card-item">
			<h3 className="card-item__title">{title}</h3>
			<div className="card-item__wrapper">
				<span>{date}</span>
				<span>{type}</span>
			</div>
			<p className="card-item__text">{text}</p>
		</li>
	)
}