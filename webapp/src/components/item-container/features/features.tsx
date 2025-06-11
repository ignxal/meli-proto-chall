import {
  MdSmartphone,
  MdMemory,
  MdBrandingWatermark,
  MdScreenLockPortrait,
} from "react-icons/md";
import "./features.css";
import type { Attributes } from "../../../types/product";
import { LuNfc } from "react-icons/lu";
import { FaMobileScreen } from "react-icons/fa6";
import { MdOutlineAddToHomeScreen } from "react-icons/md";

interface FeaturesProps {
  attributes: Array<Attributes>;
}

const featuresData: Record<string, JSX.Element> = {
  Marca: <MdBrandingWatermark />,
  Modelo: <MdSmartphone />,
  "Memoria interna": <MdMemory />,
  Pantalla: <FaMobileScreen />,
  "Con NFC": <LuNfc />,
};

const features = ({ attributes }: FeaturesProps) => (
  <section style={{ marginTop: "50px" }}>
    <hr className="product-details-hr" />

    <h2 className="product-details-subtitle">
      Caracter&iacute;sticas del Producto
    </h2>
    <div className="features-grid">
      {attributes
        .filter((item) => featuresData[item.name])
        .map((feature, index) => (
          <div className="feature-item" key={index}>
            <div className="feature-icon">{featuresData[feature.name]}</div>
            <div className="feature-text">
              <strong>{feature.name}:</strong>
              <span>{feature.value_name}</span>
            </div>
          </div>
        ))}
    </div>
    <p className="blue-anchor-features">Ver mas características</p>
  </section>
);

// const features = ({ attributes }: FeaturesProps) => {
//   const main = attributes.filter((x) => x.attribute_group_id === "");
//   const other = attributes.filter((x) => x.attribute_group_id === "OTHERS");

//   return (
//     <section>
//       <hr className="product-details-hr" />

//       <h2 className="product-details-subtitle">
//         Caracter&iacute;sticas principales
//       </h2>

//       <table className="features-table">
//         <tbody>
//           {main.map((feature) => (
//             <tr key={feature.id}>
//               <th className="feature-title">{feature.name}</th>
//               <td className="feature-value">{feature.value_name}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="other-features-container">
//         <h3>Otras caracter&iacute;sticas</h3>

//         <div className="other-features">
//           {other.map((feature) => (
//             <p key={feature.id}>
//               <b>{feature.name}: </b>
//               {feature.value_name}
//             </p>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

export default features;
