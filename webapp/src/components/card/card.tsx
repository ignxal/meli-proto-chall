import "./card.css";

interface cardProps {
    picture: string,
    freeShipping: boolean,
    title: string,
    price: number
  }

  const card = ({
    picture,
    freeShipping,
    title,
    price
  }: cardProps) => {
	const formattedPrice = new Intl.NumberFormat('es-AR').format(price);

	return (
		<section className="card-container">
			<img src={picture} alt="Imagen de producto" />

			<div className="card-body">
				<h3>$ { formattedPrice }</h3>
				{ freeShipping && 
					<p className="card-free-shipping">Env&iacute;o gratis</p>
				}
				<p>{ title }</p>
			</div>
		</section>
	);
}

export default card;
