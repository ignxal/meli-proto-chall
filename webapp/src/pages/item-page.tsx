import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import ItemContainer from "../components/item-container/itemcontainer";
import ErrorMessage from "../components/error/message";
import type { Product, QA, Review } from "../types/product";

const ItemPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState<Product>();
  const [qas, setQAs] = useState<QA[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [connectionError, setConnectionError] = useState<boolean>(false);
  const [notFoundError, setNotFoundError] = useState<boolean>(false);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const productResponse = await fetch(
          `http://localhost:3000/api/v1/products/${id}`
        );

        const productJson = await productResponse.json();

        if (
          !productResponse.ok ||
          productResponse.status === 404 ||
          productResponse.status === 500
        )
          throw productJson.error;

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

        if (typeof error === "string" && error.includes("no encontrado")) {
          setNotFoundError(true);
        } else {
          setConnectionError(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading)
    return (
      <center>
        <p>Cargando...</p>
      </center>
    );

  if (notFoundError || !item) return <ErrorMessage type="404" />;
  if (connectionError) return <ErrorMessage type="500" />;

  return (
    <>
      <Breadcrumbs
        recomendations={item.recommendations}
        category={item.category}
        subcategories={item.subcategories}
      />
      <ItemContainer item={item} qas={qas} reviews={reviews} />
    </>
  );
};

export default ItemPage;
