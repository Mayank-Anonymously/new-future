import Logo from "../common/Logo";
import CopyrightFooter from "../footer/common-footer/CopyrightFooter";
import FooterApps from "../footer/FooterApps";
import FooterContent3 from "../footer/FooterContent3";
import SearchForm2 from "../footer/SearchForm2";

const Footer = () => {
  return (
    <footer className="main-footer style-three">
      <div className="auto-container">
        <div className="widgets-section" data-aos="fade-up">
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
                  <a href="tel:+1-(888) 510-6726">+1-888-510-6726</a>
                </p>
                <p className="address">
                  9330 LYNDON B JOHNSON FWY SUITE
                  <br /> 900 DALLAS, TX 75243. <br />
                  <a href="mailto:support@Future Communication.com" className="email">
                    support@futurecommunication.org
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
