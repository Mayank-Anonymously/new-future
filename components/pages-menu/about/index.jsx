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
          dangerouslySetInnerHTML={{ __html: "<p>Future Communication is a next-generation aviation support company dedicated to enhancing how airlines, travelers, and global flight networks stay connected. We specialize in delivering fast, reliable, and intelligent communication solutions that streamline flight operations, improve passenger experience, and support real-time coordination across the skies. From advanced flight-status technologies to seamless customer interaction systems, our mission is to make air travel smarter, safer, and more efficient. At Future Communication, we believe that the future of aviation depends on clear communication&mdash;and we&rsquo;re committed to elevating every journey, one connection at a time.</p>" }}
        />
      )}

      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
