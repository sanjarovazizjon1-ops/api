
import Product from "./Product";
import LoadingButton from "../../components/loading/LoadingButton";


export default function Products({
  products,
  setPage,
  loading,
  hasMore,
}) {
  return (
    <section className="products-section">
      <h2>Our Products</h2>

      <div className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {hasMore && (
        <LoadingButton
          loading={loading}
          onClick={() => setPage((prev) => prev + 1)}
          className="view-all"
        >
          View All Products
        </LoadingButton>
      )}
    </section>
  );
}
