import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import ItemContainer from "../components/item-container/itemcontainer";
import type { Product, QA, Review } from "../types/product";

const ItemPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState<Product>(null);
  const [qas, setQAs] = useState<QA[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const productResponse = await fetch(
          `http://localhost:3000/api/v1/products/${id}`
        );
        const productJson = await productResponse.json();
        setItem(productJson);

        const qasResponse = await fetch(
          `http://localhost:3000/api/v1/products/${id}/qas`
        );
        const qasJson = await qasResponse.json();
        setQAs(qasJson);

        const reviewsResponse = await fetch(
          `http://localhost:3000/api/v1/products/${id}/reviews`
        );
        const reviewsJson = await reviewsResponse.json();
        setReviews(reviewsJson);
      } catch (error) {
        console.error("Error fetching item:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!item) return <p>No se encontró el producto.</p>;

  return (
    <>
      <Breadcrumbs
        recomendations={item.recommendations}
        category={item.category}
        subcategories={item.subcategories}
      />
      <ItemContainer 
        item={item} qas={qas} reviews={reviews}
      />
    </>
  );
};

export default ItemPage;
