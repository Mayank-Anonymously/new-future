import LoginPopup from "../../common/form/login/LoginPopup";
import MobileMenu from "../../header/MobileMenu";
import Breadcrumb from "../../common/Breadcrumb";
import Header from "../../home-4/Header";
import Footer from "../../home-4/Footer";

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

      <Breadcrumb title="About Us" meta="About Us" />
      {/* <!--End Page Title--> */}

      {data === undefined ? (
        <span className="loading-text m-5">
          <h2 className="text-center">Wait While We fetch data for you</h2>
        </span>
      ) : (
        <div
          className="auto-container bg-white m-5"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      )}

      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
