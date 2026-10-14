import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Benefits */}
      <div className="footer-benefits">

        <div className="benefit-item">
          <div className="benefit-icon">
            🚚
          </div>
          <h3>FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over $140</p>
        </div>

        <div className="benefit-item">
          <div className="benefit-icon">
            🎧
          </div>
          <h3>24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 customer support</p>
        </div>

        <div className="benefit-item">
          <div className="benefit-icon">
            🛡️
          </div>
          <h3>MONEY BACK GUARANTEE</h3>
          <p>We return money within 30 days</p>
        </div>

      </div>

      {/* Black footer */}
      <div className="footer-main">

        <div className="footer-container">

          {/* Exclusive */}
          <div className="footer-column exclusive">
            <h2>Exclusive</h2>
            <h4>Subscribe</h4>
            <p>Get 10% off your first order</p>

            <div className="subscribe-box">
              <input
                type="email"
                placeholder="Enter your email"
              />
              <button>➤</button>
            </div>
          </div>

          {/* Support */}
          <div className="footer-column">
            <h3>Support</h3>

            <p>
              111 Bijoy sarani, Dhaka,
              <br />
              DH 1515, Bangladesh.
            </p>

            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>

          {/* Account */}
          <div className="footer-column">
            <h3>Account</h3>

            <a href="#">My Account</a>
            <a href="#">Login / Register</a>
            <a href="#">Cart</a>
            <a href="#">Wishlist</a>
            <a href="#">Shop</a>
          </div>

          {/* Quick Link */}
          <div className="footer-column">
            <h3>Quick Link</h3>

            <a href="#">Privacy Policy</a>
            <a href="#">Terms Of Use</a>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
          </div>

          {/* Download App */}
          <div className="footer-column download">
            <h3>Download App</h3>

            <small>Save $3 with App New User Only</small>

            <div className="app-download">
              <div className="qr-code">
                QR
              </div>

              <div className="stores">
                <div className="store">
                  ▶ Google Play
                </div>

                <div className="store">
                   App Store
                </div>
              </div>
            </div>

            <div className="social-icons">
              <a href="#">f</a>
              <a href="#">𝕏</a>
              <a href="#">◎</a>
              <a href="#">in</a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="copyright">
          © Copyright Rimmel 2022. All right reserved
        </div>

      </div>

    </footer>
  );
};

export default Footer;