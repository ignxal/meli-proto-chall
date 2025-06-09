import "./description.css";

interface FeaturesProps {
  description: string;
}

const description = ({ description }: FeaturesProps) => {
  return (
    <section>
      <hr className="product-details-hr" />

      <h2 className="product-details-subtitle">Descripci&oacute;n</h2>

      <p className="product-description">{description}</p>
    </section>
  );
};

export default description;
