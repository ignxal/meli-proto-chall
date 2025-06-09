// src/pages/ItemPage.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";

const ItemPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/products/${id}`
        );
        const data = await response.json();
        setItem(data);
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
    </>
  );
};

export default ItemPage;
