import Blog8 from "../../blog/Blog8";
import Breadcrumb from "../../common/Breadcrumb";
import LoginPopup from "../../common/form/login/LoginPopup";
import FooterDefault from "../../footer/common-footer";
import DefaulHeader from "../../header/DefaulHeader";
import MobileMenu from "../../header/MobileMenu";
import Footer from "../../home-4/Footer";
import Header from "../../home-4/Header";
import BlogPagination from "../blog-sidebar/BlogPagination";

const index = ({ data }) => {
  return (
    <>
      <span className="header-span"></span>
      <LoginPopup />
      <Header />
      <MobileMenu />
      <Breadcrumb title="Blog" meta="Blog" />

      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row">
            <div className="content-side col-lg-12 col-md-12 col-sm-12">
              <div className="blog-grid">
                <div className="row">
                  <Blog8 data={data} />
                </div>
                {/* End .row */}

                <BlogPagination />
                {/* End blog pagination */}
              </div>
              {/* End blog-grid */}
            </div>
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* <!-- End Sidebar Container --> */}

      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
