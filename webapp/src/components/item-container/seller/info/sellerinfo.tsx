import "./sellerinfo.css";
import logoSamsung from "../../../../assets/img/seller/samsung_2.jpg";
import bannerSamsung from "../../../../assets/img/seller/samsung_banner.jpg";
import { BiMessage } from "react-icons/bi";
import { MdVerified } from "react-icons/md";
import { FaMedal, FaCheckCircle } from "react-icons/fa";
import { MdTimer } from "react-icons/md";

const SellerInfo = () => {
  return (
    <div className="seller-info mt-15px">
      <div style={{ height: "93px", marginBottom: "10px", width: "100%" }}>
        <div>
          <img
            decoding="async"
            src={bannerSamsung}
            className="seller-class-data-banner__image"
            alt=""
          />
        </div>
        <div className="seller-class-data-banner__logo-container">
          <a>
            <div className="seller-class-container">
              <div className="seller-class seller-class--square seller-class--56 seller-class-data__logo-image">
                <img
                  aria-hidden="true"
                  title="Ir a la Tienda oficial"
                  decoding="async"
                  src={logoSamsung}
                  alt=""
                />
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="seller-class-container">
        <div className="seller-class-description-container">
          <div className="seller-class-main-info-container">
            <div className="seller-class-main-info">
              <div className="seller-class-title-container">
                <h2
                  style={{ fontWeight: 400, lineHeight: 1.25, margin: 0 }}
                  className="color--BLACK size--LARGE family--SEMIBOLD title non-selectable"
                >
                  Samsung
                </h2>
              </div>
              <div className="seller-class-subtitle-container">
                <svg
                  className="icon icon-verified"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                >
                  <MdVerified color="0000FF"></MdVerified>
                </svg>
                <h3
                  style={{ fontWeight: 400, lineHeight: 1.25, margin: 0 }}
                  className="color--GRAY size--XXSMALL family--REGULAR seller-class-subtitle"
                >
                  Tienda oficial de Mercado Libre
                </h3>
              </div>
            </div>
          </div>
          <div className="extra-info-container">
            <div className="extra-info">
              <div className="detail-info-container">
                <p className="color--GRAY size--XXSMALL family--REGULAR products">
                  <span className="color--BLACK size--XXSMALL family--SEMIBOLD">
                    +1000
                  </span>{" "}
                  Productos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="location-and-mercadoLider" style={{ marginTop: "16px" }}>
        <FaMedal className="location-and-mercadoLider-icon text-green" />

        <div className="fs-14px">
          <p className="fs-16px text-green">
            <b>MercadoL&iacute;der Platinum</b>
          </p>
          <p className="text-grey">&iexcl;Es uno de los mejores del sitio!</p>
        </div>
      </div>

      <ul className="reputation-bar">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <div className="reputation">
        <div className="rep-section">
          <p className="fs-20px" style={{ color: "#000" }}>
            <b>+1 M</b>
          </p>
          <p className="fs-12px mt-8px">Ventas concretadas</p>
        </div>

        <div className="rep-section">
          <div>
            <BiMessage className="rep-main-icon" />
            <FaCheckCircle className="rep-check-icon" />
          </div>

          <p className="fs-12px mt-8px">Brinda buena atenci&oacute;n</p>
        </div>

        <div className="rep-section">
          <div>
            <MdTimer className="rep-main-icon" />
            <FaCheckCircle className="rep-check-icon" />
          </div>

          <p className="fs-12px mt-8px">Despacha sus productos a tiempo</p>
        </div>
      </div>
      <div style={{ marginTop: "1em" }}>
        <button className="btn-light-blue visit-store-btn">
          Ir a la Tienda oficial
        </button>
      </div>
    </div>
  );
};

export default SellerInfo;
