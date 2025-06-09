import "./Breadcrumbs.css";
import { MdKeyboardArrowRight } from "react-icons/md";

interface BreadcrumbsProps {
  recomendations: string;
  category: string;
  subcategories: string[];
}

const Breadcrumbs = ({
  recomendations,
  category,
  subcategories,
}: BreadcrumbsProps) => {
  return (
    <section className="main-container pt-15px">
      <div className="text-interest">
        <b>Tambi&eacute;n puede interesarte: </b>
        <span>{recomendations}</span>
      </div>

      <div className="breadcrumbs-row">
        <section className="breadcrumbs">
          <p>Volver</p>
          <nav>
            <ol className="breadcrumbs-list">
              <li>{category}</li>

              {subcategories.map((subcategory, index) => (
                <li key={index}>
                  {" "}
                  <MdKeyboardArrowRight className="breadcrumbs-arrow-right" />
                  {subcategory}
                </li>
              ))}
            </ol>
          </nav>
        </section>

        <ul className="share-or-sell">
          <li>Vender uno igual</li>
          <li>Compartir</li>
        </ul>
      </div>
    </section>
  );
};

export default Breadcrumbs;
