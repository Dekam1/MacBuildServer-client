export default function WorkCard({ title, year, type, text, img }) {
	return (
		<li className="works__item work-item">
			<div className="work-item__wrapper">
				<img width={246} src={img} alt="card" />
				<div className="work-item__right">
					<h3 className="work-item__title">{title}</h3>
					<div className="work-item__info">
						<span>{year}</span>
						<span>{type}</span>
					</div>
					<p className="work-item__text">
						{text}
					</p>
				</div>
			</div>
		</li>
	)
}