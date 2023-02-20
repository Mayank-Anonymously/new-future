import LoginPopup from "../../common/form/login/LoginPopup";
import FooterDefault from "../../footer/common-footer";
import MobileMenu from "../../header/MobileMenu";
import Footer from "../../home-4/Footer";
import Header from "../../home-4/Header";
import TermsText from "./TermsText";

const index = ({ data }) => {
  console.log("data:", data.length);
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <section className="tnc-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Terms and Conditions</h2>
            <div className="text">Home / Terms and Conditions</div>
          </div>
          {/* End sec-title */}
          {data.length !== 0 || data.length !== undefined ? (
            <TermsText data={data} />
          ) : (
            <span className="loading-text">
              <h2>Wait While We Fetch Your Data.</h2>
            </span>
          )}
        </div>
      </section>
      {/* <!-- End TNC Section --> */}

      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
