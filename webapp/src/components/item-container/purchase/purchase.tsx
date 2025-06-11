import "./purchase.css";

import visaCredit from "../../../assets/img/payment-methods/credit/visa.png";
import americanCredit from "../../../assets/img/payment-methods/credit/american-express.png";
import masterCredit from "../../../assets/img/payment-methods/credit/master-card.png";
import visaDebit from "../../../assets/img/payment-methods/debit/visa.png";
import masterDebit from "../../../assets/img/payment-methods/debit/master-card.png";
import abitab from "../../../assets/img/payment-methods/cash/abitab.png";
import { PiCreditCard } from "react-icons/pi";

const Purchase = () => {
  return (
    <section className="product-purchase">
      <p className="title">Medios de pago</p>
      <div className="purchase-installments">
        <PiCreditCard className="purchase-icon" />
        <p>¡Paga en hasta 12 cuotas sin interes!</p>
      </div>

      <h3 className="additional-info-subtitle mb-4px mt-24px">
        Tarjetas de cr&eacute;dito
      </h3>
      <p className="text-grey mb-8px">
        &iexcl;Cuotas sin inter&eacute;s con bancos seleccionados!
      </p>
      <img src={visaCredit} alt="Tarjeta de credito Visa" className="mr-24px" />
      <img
        src={americanCredit}
        alt="Tarjeta de credito American Express"
        className="mr-24px"
      />
      <img
        src={masterCredit}
        alt="Tarjeta de credito Master Card"
        className="mr-24px"
      />
      <h3 className="additional-info-subtitle mb-15px">
        Tarjetas de d&eacute;bito
      </h3>
      <img src={visaDebit} alt="Tarjeta de Debito Visa" className="mr-24px" />
      <img
        src={masterDebit}
        alt="Tarjeta de Debito Master Card"
        className="mr-24px"
      />

      <h3 className="additional-info-subtitle mb-15px">Efectivo</h3>
      <img
        src={abitab}
        alt="Efectivo Abitab"
        style={{ width: "70px", height: "20px" }}
        className="mr-24px"
      />

      <p className="blue-anchor mt-24px d-inline-block">
        Conoc&eacute; otros medios de pago
      </p>
    </section>
  );
};

export default Purchase;
