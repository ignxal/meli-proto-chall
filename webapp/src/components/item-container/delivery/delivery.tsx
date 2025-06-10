import "./delivery.css";
import { IoReturnDownBack, IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import logo from "../../../assets/img/samsung.jpg";
import { PiMedalLight } from "react-icons/pi";
import type { Product, Review } from "../../../types/product";

interface ProductDeliveryProps {
    product: Product;
  }
  
  const ProductDelivery = ({ product }: ProductDeliveryProps) => {
  const reviews: Review[] = product.reviews || []; 

  let avgRating: number = 0;
  if (reviews) {
    reviews.forEach((review: Review) => (avgRating += review.rating));
    avgRating = Number((avgRating / reviews.length).toFixed(1));
  }

  return (
    <section className="product-delivery">
      <div className="delivery">
        <p className="green-text">Envío gratis</p>
        <p>a todo el país</p>
      </div>
      <p className="grey-text">Conoce los tiempos y formas de envío</p>
      <p className="blue-anchor">Calcular cuando llega</p>

      <div className="stock-available">
        <b>
          {product.available_quantity > 0
            ? "Stock disponible"
            : "Sin Stock Disponible"}
        </b>
        <div className="row">
          <p>Cantidad:&nbsp;</p>
          <b>1 unidad</b>
          <MdKeyboardArrowDown className="stock-down-arrow" />
          <p className="available-quantity">
            ({product.available_quantity} disponibles)
          </p>
        </div>
      </div>
      <button
        disabled={product.available_quantity < 1}
        className="btn-blue product-details-btn mb-8px"
      >
        Comprar ahora
      </button>
      <button
        disabled={product.available_quantity < 1}
        className="btn-light-blue product-details-btn"
      >
        Agregar al carrito
      </button>

      <div className="company-banner">
        <img
          src={logo}
          alt="Samsung"
          style={{ width: 50, height: 30, marginRight: 10 }}
        />
        <p>
          Tienda oficial <span className="blue-anchor">Samsung</span>
          <p>
            <b>+5mil ventas</b>
          </p>
        </p>
      </div>

      <div className="purchase-benefits">
        <div className="compra-protegida">
          <IoReturnDownBack className="benefits-icon" />

          <p>
            <span className="blue-anchor">Devoluci&oacute;n gratis. </span>
            Ten&eacute;s 30 d&iacute;as desde que lo recib&iacute;s.
          </p>
        </div>
        <div className="compra-protegida">
          <IoShieldCheckmarkOutline className="benefits-icon" />
          <p>
            <span className="blue-anchor">Compra Protegida, </span>recib&iacute;
            tu producto que esperabas o te devolvemos tu dinero.
          </p>
        </div>

        <div className="mercado-puntos">
          <PiMedalLight className="benefits-icon" />
          <p>1 año de garantía de fábrica</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDelivery;
