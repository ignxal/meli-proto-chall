import type { Product, QA, Review } from "../../types/product";
import "./item-container.css";
import Gallery from "./gallery/gallery";
import Features from "./features/features";
import Description from "./description/description";
import SellerPosts from "./seller/posts/sellerposts";
import QuestionsAndAnswers from "./qa/questionsanswers";
import Reviews from "./reviews/reviews";
import ProductDelivery from "./delivery/delivery";
import ProductPrice from "./price/price";
import Purchase from "./purchase/purchase";

interface ItemContainerProps {
  item: Product;
  qas: QA[] | [];
  reviews: Review[] | [];
}

const ItemContainer = ({ item, qas, reviews }: ItemContainerProps) => {
  return (
    //<section className="main-container product-details-grid bg-white">
    //  <article className="right-column"></article>
    //
    //  <article className="left-column">
    //    <Gallery pictures={item.pictures}></Gallery>
    //    <div className="mx-30px">
    //      <SellerPosts />
    //      <Features attributes={item.attributes} />
    //      <Description description={item.description} />
    //      <QuestionsAndAnswers qas={qas}/>
    //      <Reviews reviews={reviews} product={item}/>
    //    </div>
    //  </article>
    //</section>

    <section className="main-container product-details-grid bg-white">
      <div className="left-side-columns">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <article className="left-column">
            <Gallery pictures={item.pictures} />
          </article>
          <article className="right-column">
            <ProductPrice product={item} reviews={reviews} />
          </article>
        </div>
        <SellerPosts />
        <Features attributes={item.attributes} />
        <Description description={item.description} />
        <QuestionsAndAnswers qas={qas} />
        <Reviews reviews={reviews} product={item} />
      </div>
      <article className="main-right-column">
        <ProductDelivery product={item} />
        <Purchase></Purchase>
      </article>
    </section>
  );
};

export default ItemContainer;
