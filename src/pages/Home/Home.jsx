import "./Home.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import {
  bannerOne,
  bannerTwo,
  bannerThree,
  chair,
  lamp,
  shelf,
  coffeeTable,
} from "../../assets";

const Home = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <section className="homepage-container">
        <main className="hero-container container-2">
          <div className="banner-section">
            <div className="banner-left">
              <div className="banner-img">
                <img
                  className="img-responsive"
                  src={bannerOne}
                  alt="banner image"
                />
              </div>
              <div className="box-overlay">
                <span className="overlay-header">
                  <h1>
                    Exotic minimal <br />
                    furniture.
                  </h1>
                </span>
                <span className="overlay-para">
                  <p>
                    Choose from a wide range of well crafted wooden furniture.
                  </p>
                </span>
                <span className="overlay-button-container">
                  <a href="/pages/Products/products.html">
                    <button className="btn btn-solid-primary">Shop Now</button>
                  </a>
                </span>
              </div>
            </div>
            <div className="banner-right">
              <div className="banner-right-topp banner-img">
                <img
                  className="img-responsive"
                  src={bannerTwo}
                  alt="banner image"
                />
              </div>
              <div className="banner-right-bottom banner-img">
                <img
                  className="img-responsive"
                  src={bannerThree}
                  alt="banner image"
                />
              </div>
            </div>
          </div>

          <div className="feature-container container-2">
            <div className="feature-header">
              <h2 className="feature-heading">Featured Categories</h2>
            </div>
            <div className="feature-body">
              <div className="card-landing-page">
                <div className="card-image">
                  <img className="img-responsive" src={chair} />
                </div>
                <span className="card-catg-name">CHAIRS & SOFAS</span>
              </div>

              <div className="card-landing-page">
                <div className="card-image">
                  <img className="img-responsive" src={lamp} />
                </div>
                <span className="card-catg-name">LAMP & LIGHTINGS</span>
              </div>

              <div className="card-landing-page">
                <div className="card-image">
                  <img className="img-responsive" src={shelf} />
                </div>
                <span className="card-catg-name">STORAGE & SHELVES</span>
              </div>

              <div className="card-landing-page">
                <div className="card-image">
                  <img className="img-responsive" src={coffeeTable} />
                </div>
                <span className="card-catg-name">LIVING ROOM</span>
              </div>
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
};

export { Home };
