import { useState } from "react";
import "./price.css";

import { BsHeart, BsHeartFill } from "react-icons/bs";
import logo from "../../../assets/img/samsung.jpg";
import { AiFillStar } from "react-icons/ai";
import type { Product, Review } from "../../../types/product";

interface ProductPriceProps {
  product: Product;
  reviews: Review[];
}

const ProductPrice = ({ product, reviews }: ProductPriceProps) => {
  const [favorite, setFavorite] = useState(false);

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const handleFavorite = () => setFavorite((prevState) => !prevState);

  const formattedPrice = new Intl.NumberFormat("es-AR").format(product.price);
  const paymentTwelveMonths = Math.trunc(product.price / 12);
  const paymentTwelveMonthsDecimals = ((product.price / 12) % 1)
    .toFixed(2)
    .substring(2);

  let avgRating: number = 0;
  reviews.forEach((review) => (avgRating += review.rating));
  avgRating = Number((avgRating / reviews.length).toFixed(1));

  const avgRatingStarsElement = [...Array(5)].map((_, index) => (
    <AiFillStar
      key={index}
      className={
        index + 1 <= Math.round(avgRating)
          ? "review-star-filled"
          : "review-star-empty"
      }
    />
  ));

  return (
    <section className="product-details">
      <div className="blue-anchor">
        <img
          src={logo}
          alt="Samsung"
          style={{ width: 24, height: 10, marginRight: 8 }}
        />
        Visita la Tienda oficial de Samsung
      </div>
      <div className="row">
        <p className="sold-quantity">
          Nuevo&nbsp;&nbsp;|&nbsp;&nbsp;{product.sold_quantity} vendidos
        </p>
        {favorite ? (
          <BsHeartFill className="fav-icon" onClick={handleFavorite} />
        ) : (
          <BsHeart className="fav-icon" onClick={handleFavorite} />
        )}
      </div>

      <div className="product-title">
        <h1>{product.title}</h1>
      </div>
      <div className="reviews-avg">
        <p className="thirty-days-text">{avgRating}</p>

        <div>{avgRatingStarsElement}</div>

        <p className="thirty-days-text">({reviews.length})</p>
      </div>
      <div className="product-price">
        <h2>$ {formattedPrice}</h2>

        <div className="payment-twelve-months">
          <p>en </p>
          <p className="free-shipping-and-return">
            <span /> 12 cuotas de $ {paymentTwelveMonths} sin interés
          </p>
          <sup className="free-shipping-and-return">
            {paymentTwelveMonthsDecimals}
          </sup>
        </div>

        <p className="blue-anchor">Ver medios de pago y promociones</p>
      </div>
      <div className="stock">
        <p>Color: </p>
        <b> {selectedColor.name}</b>
      </div>

      <div className="color-thumbnails">
        {product.colors.map((color) => (
          <button key={color.id} onClick={() => setSelectedColor(color)}>
            <img
              src={color.secure_url}
              alt={color.name}
              style={{ width: 40, height: 85 }}
              className={
                selectedColor === color ? "selected-color-image" : "color-image"
              }
            />
          </button>
        ))}
      </div>

      <div className="brief-description">
        <b> Lo que tienes que saber de este producto</b>
        {product.brief_details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </div>

      <p className="blue-anchor">Ver características</p>

      <div className="purchase-options">
        <p>Opciones de compra:</p>
        <p className="blue-anchor">
          3 productos nuevos desde {product.base_price}
        </p>
      </div>
    </section>
  );
};

export default ProductPrice;
