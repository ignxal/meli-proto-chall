import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import ItemContainer from "../components/item-container/itemcontainer";
import ErrorMessage from "../components/error/message";
import type { Product, QA, Review } from "../types/product";
import {
  fetchProduct,
  fetchProductQAs,
  fetchProductReviews,
} from "../services/api.ts";

const ItemPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState<Product>();
  const [qas, setQAs] = useState<QA[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [connectionError, setConnectionError] = useState(false);
  const [notFoundError, setNotFoundError] = useState(false);

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        if (!id) throw new Error("ID no definido");

        const product = await fetchProduct(id);
        const qas = await fetchProductQAs(id);
        const reviews = await fetchProductReviews(id);

        setItem(product);
        setQAs(qas);
        setReviews(reviews);
      } catch (error) {
        console.error("Error fetching item:", error);

        if (error instanceof Error && error.message.includes("no encontrado")) {
          setNotFoundError(true);
        } else {
          setConnectionError(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchItemData();
  }, [id]);

  if (loading)
    return (
      <center>
        <p>Cargando...</p>
      </center>
    );

  if (connectionError) return <ErrorMessage type="500" />;
  if (notFoundError || !item) return <ErrorMessage type="404" />;

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
