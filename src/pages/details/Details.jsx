import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../api/ProductApi";
import "./details.css"; // YANGI
import { FaStar } from "react-icons/fa"; // YANGI
import { FiHeart, FiMinus, FiPlus, FiRefreshCw } from "react-icons/fi"; // YANGI
import { TbTruckDelivery } from "react-icons/tb"; // YANGI

export default function Details() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [qty, setQty] = useState(2); // YANGI
  const [size, setSize] = useState("M"); // YANGI
  const [color, setColor] = useState("#A0BCE0"); // YANGI

  useEffect(() => {
    async function loadProducts() {
      try {
        const product = await getProducts(id);
        setData(product);
      } catch (error) {
        console.error("Maxsulotlarni yuklashda xato", error);
      }
    }
    loadProducts();
  }, [id]);

  console.log(data);

  return (
    <div className="details">
      {/* YANGI: container */}
      <div className="container">
        {/* rasm (chap 50%) */}
        <div className="details__main">
          <img src={data?.image} alt={data?.title} />
        </div>

        {/* yozuv (o'ng 50%) */}
        <div className="details__info">
          <h1>{data?.title}</h1>

          <div className="details__rating">
            <span className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="star--empty" />
            </span>
            <span className="reviews">(150 Reviews)</span>
            <span className="divider" />
            <span className="stock">In Stock</span>
          </div>

          <p className="details__price">${data?.price}</p>
          <p className="details__desc">{data?.description}</p>

          <hr className="line" />

          <div className="row">
            <span className="row__label">Colours:</span>
            <div className="colors">
              {["#A0BCE0", "#E07575"].map((c) => (
                <button
                  key={c}
                  className={`color ${color === c ? "color--active" : ""}`}
                  style={{ background: c }}
                  onClick={() => setColor(c)}
                />
              ))}
            </div>
          </div>

          <div className="row">
            <span className="row__label">Size:</span>
            <div className="sizes">
              {["XS", "S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  className={`size ${size === s ? "size--active" : ""}`}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="buy">
            <div className="qty">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))}>
                <FiMinus />
              </button>
              <span>{qty}</span>
              <button
                className="qty__plus"
                onClick={() => setQty((q) => q + 1)}
              >
                <FiPlus />
              </button>
            </div>
            <button className="buy__btn">Buy Now</button>
            <button className="wish">
              <FiHeart />
            </button>
          </div>

          <div className="delivery">
            <div className="delivery__item">
              <span className="delivery__icon">
                <TbTruckDelivery />
              </span>
              <div>
                <h4>Free Delivery</h4>
                <p>
                  <u>Enter your postal code for Delivery Availability</u>
                </p>
              </div>
            </div>
            <div className="delivery__item">
              <span className="delivery__icon">
                <FiRefreshCw />
              </span>
              <div>
                <h4>Return Delivery</h4>
                <p>
                  Free 30 Days Delivery Returns. <u>Details</u>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}