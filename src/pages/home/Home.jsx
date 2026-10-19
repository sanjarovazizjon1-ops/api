
import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import { getProduct } from "../../api/ProductApi";
import Products from "../../components/products/Product";

export default function Home() {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(8);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        const products = await getProduct(limit);
        console.log(products);
        setData(products);
      } catch (error) {
        console.error("Maxsulotlarni yuklashda xato", error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [limit]);

  return (
    <>
      <Hero />
      <Products
        loading={loading}
        setLimit={setLimit}
        products={data}
      />
    </>
  );
}
