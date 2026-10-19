      
import { Link } from "react-router-dom";
import "./Product.css";
import LoadingButton from "../loading/LoadingButton";

export default function Products({ products, setLimit, loading }) {
  function renderProducts(products) {
    return products?.map((product) => {
      return <ProductItem key={product.id} product={product} />;
    });
  }

  return (
    <section>
      <div className="products-grid">
        {renderProducts(products)}
      </div>

      <LoadingButton
        isLoading={loading}
        onClick={() => setLimit((prev) => prev + 8)}
      >
        View More
      </LoadingButton>
    </section>
  );
}

function ProductItem({ product }) {
  return (
    <Link className="link" to={`/details/${product.id}`}>
      <div className="card">
        <div>
          <img src={product.img} alt="" />
        </div>

        <h3>{product.title}</h3>
        <p>{product.price}</p>
      </div>
    </Link>
  );
}
