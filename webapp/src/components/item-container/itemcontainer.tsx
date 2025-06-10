import type { Product, QA, Review } from "../../types/product";
import "./itemcontainer.css";
import Gallery from "./gallery/gallery";
import Features from "./features/features";
import Description from "./description/description";
import SellerPosts from "./seller/posts/sellerposts";
import QuestionsAndAnswers from "./qa/questionsanswers";

interface ItemContainerProps {
  item: Product;
  qas: QA[] | [];
  reviews: Review[] | [];
}

const ItemContainer = ({ item, qas, reviews }: ItemContainerProps) => {
  return (
    <section className="main-container product-details-grid bg-white">
      <article className="right-column"></article>
      <article className="left-column">
        <Gallery pictures={item.pictures}></Gallery>
        <div className="mx-30px">
          <SellerPosts />
          <Features attributes={item.attributes} />
          <Description description={item.description} />
          <QuestionsAndAnswers qas={qas}/>
        </div>
      </article>
    </section>
  );
};

export default ItemContainer;
