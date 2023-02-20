import LoginPopup from "../../common/form/login/LoginPopup";
import MobileMenu from "../../header/MobileMenu";
import Header from "../../home-4/Header";
import Footer from "../../home-4/Footer";
import PrivacyText from "./privacyText";

const index = ({ data }) => {
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
            <h2>Privacy and Policy</h2>
            <div className="text">Home / Privacy and Policy</div>
          </div>
          {/* End sec-title */}
          <PrivacyText data={data} />
        </div>
      </section>
      {/* <!-- End TNC Section --> */}
      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
