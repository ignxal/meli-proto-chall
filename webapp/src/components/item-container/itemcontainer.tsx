import type { Product } from "../../types/product";
import "./itemcontainer.css";
import Gallery from "./gallery/gallery";

interface ItemContainerProps {
  item: Product;
}

const ItemContainer = ({ item }: ItemContainerProps)  => {
  return (
    <section className="main-container product-details-grid bg-white">
      <article className="right-column"></article>
      <article className="left-column">
      <Gallery pictures={item.pictures} ></Gallery>
      </article>
    </section>
  );
};

export default ItemContainer;
