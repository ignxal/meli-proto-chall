import type { Product } from "../../types/product";
import "./itemcontainer.css";
import Gallery from "./gallery/gallery";
import Features from "./features/features";
import Description from "./description/description";
import SellerPosts from "./seller/posts/sellerposts";

interface ItemContainerProps {
  item: Product;
}

const ItemContainer = ({ item }: ItemContainerProps) => {
  return (
    <section className="main-container product-details-grid bg-white">
      <article className="right-column"></article>
      <article className="left-column">
        <Gallery pictures={item.pictures}></Gallery>
        <div className="mx-30px">
          <SellerPosts />
          <Features attributes={item.attributes} />
          <Description description={item.description} />
        </div>
      </article>
    </section>
  );
};

export default ItemContainer;
