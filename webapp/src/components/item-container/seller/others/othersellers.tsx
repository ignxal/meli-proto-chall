import "./othersellers.css";

const OtherSellers = () => {
  return (
    <div className="other-sellers-container">
      <h2 className="other-sellers-title">Otras opciones de compra</h2>
      <form>
        <button
          type="submit"
          className="others-seller-button others-sellers-button-anchor-ui others-sellers-button-ui others-seller-button--large others-seller-button--transparent others-seller-button--full-width"
        >
          <span
            className="others-seller-button__content"
            style={{ fontSize: "14px" }}
          >
            Ver más opciones desde{" "}
            <span data-testid="price-part">
              <span
                role="img"
                aria-label="684998 pesos"
                aria-roledescription="Monto"
              >
                <span aria-hidden="true">$</span>
                <span aria-hidden="true">684.998</span>
              </span>
            </span>
          </span>
        </button>
      </form>
    </div>
  );
};

export default OtherSellers;
