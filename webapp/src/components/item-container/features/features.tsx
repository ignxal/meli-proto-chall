import "./features.css";
import type { Attributes } from "../../../types/product";

interface FeaturesProps {
  attributes: Array<Attributes>;
}

const features = ({ attributes }: FeaturesProps) => {
  const main = attributes.filter((x) => x.attribute_group_id === "");
  const other = attributes.filter((x) => x.attribute_group_id === "OTHERS");

  return (
    <section>
      <hr className="product-details-hr" />

      <h2 className="product-details-subtitle">
        Caracter&iacute;sticas principales
      </h2>

      <table className="features-table">
        <tbody>
          {main.map((feature) => (
            <tr key={feature.id}>
              <th className="feature-title">{feature.name}</th>
              <td className="feature-value">{feature.value_name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="other-features-container">
        <h3>Otras caracter&iacute;sticas</h3>

        <div className="other-features">
          {other.map((feature) => (
            <p key={feature.id}>
              <b>{feature.name}: </b>
              {feature.value_name}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default features;
