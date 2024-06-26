import '../styles/card.css'
import config from '../../vite.config.ts'

function Card(props: any) {
	const url = `${config.base}/assets/${props.fileName}`
	return (
		<div className="card">
			{/* link to documentation using props */}
			<a href="/">
				<img
					src={url}
					className="card-img-top card-image bg-dark py-3 px-3 rounded-2"
					alt="this"
				></img>
			</a>
			<div className="card-body">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
					voluptatum in id ipsam molestiae commodi dolorum ad iure. Iusto vero
					iste beatae voluptate quae quis nisi sit molestiae temporibus minus.
				</p>
			</div>
		</div>
	)
}

export default Card
