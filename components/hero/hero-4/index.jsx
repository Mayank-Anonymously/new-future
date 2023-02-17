import SearchForm3 from "../../common/job-search/SearchForm3";
import PopularSearch from "../PopularSearch";

const index = () => {
  return (
    <section
      className="banner-section-four"
      style={{ backgroundImage: "url(images/background/engine-bg.webp)" }}
    >
      <div className="auto-container">
        <div className="content-box">
          <h3>Get Your Flights At Cheap Fare.</h3>
          <div
            className="job-search-form"
            data-aos-delay="700"
            data-aos="fade-up"
          >
            <SearchForm3 btnStyle="btn-style-two" />
          </div>
          {/* </div> */}
          {/* <div id="overlay"></div> */}
          {/* <!-- Job Search Form --> */}
        </div>
        {/* <!-- Job Search Form --> */}

        {/* <!-- Popular Search --> */}
        {/* <PopularSearch /> */}
        {/* <!-- End Popular Search --> */}
      </div>
    </section>
  );
};

export default index;
