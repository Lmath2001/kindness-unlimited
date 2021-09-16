import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer class="footer-section">
        <div class="container">
          <div class="footer-cta pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-md-4 mb-5 column-footer">
                <div class="single-cta">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="cta-text pt-2">
                    <h4 className="pb-2">Find us</h4>
                    <span>
                      A-102, Ajanta Sant Muktabai Road, Vile Parle(E),
                      Mumbai-400057.
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-3 column-footer">
                <div class="single-cta">
                  <i class="fas fa-phone"></i>
                  <div class="cta-text pt-2">
                    <h4 className="pb-2">Call us</h4>
                    <span>
                    +91 9820710081
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-3 column-footer">
                <div class="single-cta">
                  <i class="far fa-envelope-open"></i>
                  <div class="cta-text pt-2">
                    <h4 className="pb-2">Email us</h4>
                    <span>
                    contactus@kindnessunlimited.in
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ----- */}
          <div class="footer-content pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-lg-4 mb-50">
                <div class="footer-widget">
                  <div class="footer-logo">
                    <a href="index.html">
                      <img
                        src="https://mlbky1ucqujg.i.optimole.com/5w3IFV4.4-JE~2b7de/w:auto/h:auto/q:75/https://kindnessunlimited.in/wp-content/uploads/2019/07/KU-logoFINAL_2_compressed-e1594823390752.png"
                        class="img-fluid image-size-footer"
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div class="footer-text">
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                      sed do eiusmod tempor incididuntut consec tetur
                      adipisicing elit,Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div class="footer-social-icon mt-3">
                    <span>Follow us</span>
                    <a href="#">
                      <i class="fab fa-facebook-f facebook-bg"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-twitter twitter-bg"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-google-plus-g google-bg"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-youtube youtube-bg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-3 mt-3">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Our Team</a>
                    </li>
                    <li>
                      <a href="#">KU Projects</a>
                    </li>
                    <li>
                      <a href="#">Collaborations</a>
                    </li>
                    <li>
                      <a href="#">Donate</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-5 mt-2">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div class="footer-text mb-25">
                    <p>
                      Don’t miss to subscribe to our new letter, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div class="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button>
                        <i class="fab fa-telegram-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-area">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                <div class="copyright-text">
                  <p>
                    Copyright &copy; 2021, All Right Reserved{" "}
                  </p>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div class="footer-menu">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Policy</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
