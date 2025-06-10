import "./sellerposts.css";
import Card from "../../../card/card";
import samsungS25Case from "../../../../assets/img/products/samsungS25Case.jpg";
import samsungS22 from "../../../../assets/img/products/samsungS22.jpg";
import samsungS25 from "../../../../assets/img/products/samsungS25.jpg";

const SellerPosts = () => {
	return (
		<section>
			<hr className="product-details-hr" />

			<div className="seller-posts-container">
				<h2 className="product-details-subtitle">Publicaciones del vendedor</h2>

				<div className="seller-posts-card-container">
					<Card
						title="Samsung Galaxy S25 Ultra 5G 256GB Celular Libre Nuevo"
						price={ 1700000 }
						picture={ samsungS25 }
                        freeShipping={ false }
					/>

					<Card
						title="Funda para Celular Samsung Galaxy S25"
						price={ 15000 }
						picture={ samsungS25Case }
						freeShipping={ true }
					/>

					<Card
						title="Samsung Galaxy S22 128GB"
						price={ 400000 }
						picture={ samsungS22 }
						freeShipping={ true }
					/>
				</div>

				<p className="blue-anchor mt-24px d-inline-block">Ver m&aacute;s publicaciones del vendedor</p>
			</div>
		</section>
	);
}

export default SellerPosts;
