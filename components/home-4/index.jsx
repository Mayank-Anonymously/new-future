import Header from "./Header";
import Footer from "./Footer";
import Hero4 from "../hero/hero-4";
import Block2 from "../block/Block2";
import Blog from "../blog/Blog";
import LoginPopup from "../common/form/login/LoginPopup";
import MobileMenu from "../header/MobileMenu";
import FightFilterTab from "../job-featured/FightRouteTab";

const index = ({ data }) => {
  return (
    <>
      <LoginPopup />
      <Header />
      <MobileMenu />

      <Hero4 />
      <section className="job-section alternate">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Most Popular Routes Based On Price</h2>
            <div className="text">
              Find a best in flight for next vacations.
            </div>
          </div>
          <div className="default-tabs tabs-box">
            <FightFilterTab />
          </div>
        </div>
      </section>
      <section className="process-section pt-0">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>How to Get Best Deals?</h2>
            <div className="text">Flights for anyone, anywhere</div>
          </div>

          <div className="row" data-aos="fade-up">
            <Block2 />
          </div>
        </div>
      </section>

      {/* <section className="top-companies style-two">
        <div className="auto-container">
          <div className="sec-title">
            <h2>Top Company Registered</h2>
            <div className="text">
              Some of the companies we have helped recruit excellent applicants
              over the years.
            </div>
          </div>

          <div className="carousel-outer" data-aos="fade-up">
            <div className="companies-carousel">
              <TopCompany />
            </div>
          </div>
        </div>
      </section>

      <section className="job-categories">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Popular Job Categories</h2>
            <div className="text">2020 jobs live - 293 added today.</div>
          </div>

          <div
            className="row "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <JobCategorie1 />
          </div>
        </div>
      </section> */}

      <section className="news-section style-two">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Recent New Articles</h2>
            <div className="text">
              Fresh flight related news content posted each day.
            </div>
          </div>
          <div className="row" data-aos="fade-up">
            {/* <Blog data={data} /> */}
          </div>
        </div>
      </section>

      {/* <section className="clients-section alternate">
        <div className="sponsors-outer" data-aos="fade">
          <ul className="sponsors-carousel">
            <Partner />
          </ul>
        </div>
      </section> */}

      <Footer />
    </>
  );
};

export default index;
