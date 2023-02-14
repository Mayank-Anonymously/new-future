import Logo from "../common/Logo";
import CopyrightFooter from "../footer/common-footer/CopyrightFooter";
import FooterApps from "../footer/FooterApps";
import FooterContent3 from "../footer/FooterContent3";
import SearchForm2 from "../footer/SearchForm2";

const Footer = () => {
  return (
    <footer className="main-footer style-three">
      <div className="auto-container">
        {/* <!--Widgets Section--> */}
        <div className="widgets-section" data-aos="fade-up">
          {/* <div className="newsletter-form wow fadeInUp">
            <div className="sec-title light text-center">
              <h2>Subscribe Our Newsletter</h2>
              <div className="text">We don’t send spam so don’t worry.</div>
            </div>
            <SearchForm2 />
          </div> */}
          {/* End .newsletter-form */}

          <div className="row">
            <div className="big-column col-xl-6 col-lg-3 col-md-12">
              <div className="footer-column about-widget">
                <div className="logo">
                  <a href="#">
                    <Logo />
                  </a>
                </div>
                <p className="phone-num">
                  <span>Call us </span>
                  <a href="thebeehost@support.com">123 456 7890</a>
                </p>
                <p className="address">
                  9330 Lyndon B johnson FWY SUITE 900,
                  <br /> DALLAS, TX 75243. <br />
                  <a href="mailto:support@vflyyou.com" className="email">
                    support@vflyyou.com
                  </a>
                </p>
              </div>
            </div>
            {/* End footer address left widget */}

            <div className="big-column col-xl-6 col-lg-9 col-md-12">
              <div className="row">
                <FooterContent3 />

                {/* <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                  <div className="footer-widget">
                    <h4 className="widget-title">Mobile Apps</h4>
                    <FooterApps />
                  </div>
                </div> */}
              </div>
              {/* End .row */}
            </div>
            {/* End col-xl-8 */}
          </div>
        </div>
      </div>
      {/* End auto-container */}

      {/* <CopyrightFooter /> */}
      {/* <!--Bottom--> */}
    </footer>
  );
};

export default Footer;
