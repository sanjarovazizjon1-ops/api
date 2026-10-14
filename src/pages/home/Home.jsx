
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import { getProduct } from "../../api/ProductApi";
import Products from "../../components/products/Product";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);

        const data = await getProduct(8, page);
        const newProducts = Array.isArray(data)
          ? data
          : data.products || [];

        setProducts((prev) =>
          page === 1 ? newProducts : [...prev, ...newProducts]
        );

        setHasMore(newProducts.length === 8);
      } catch (error) {
        console.error("Mahsulotlarni yuklashda xato:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [page]);

  return (
    <>
      <Hero />

      <Products
        products={products}
        setPage={setPage}
        loading={loading}
        hasMore={hasMore}
      />
    </>
  );
}