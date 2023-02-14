import FooterDefault from "../../../components/footer/common-footer";
import MobileMenu from "../../../components/header/MobileMenu";
import DetailsContent from "../../../components/blog-meu-pages/blog-details/details-content";
import blogs from "../../../data/blogs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../../../components/common/Seo";
import { host, siteId } from "../../../static";
import Header from "../../../components/home-4/Header";

const BlogDetailsDynamic = ({ data }) => {
  const router = useRouter();
  const [blog, setBlogItem] = useState({});
  const id = router.query.id;

  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else setBlogItem(blogs.find((item) => item.id == id));

    return () => {};
  }, [id]);

  return (
    <>
      <Seo
        pageTitle={data.metaTitle}
        description={data.metaDescription}
        keywords={data.keywords}
      />

      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      {/* <LoginPopup /> */}
      {/* End Login Popup Modal */}

      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      {/* <!-- Blog Single --> */}
      <section className="blog-single">
        <div className="auto-container">
          <div className="upper-box">
            <h3>{blog?.blogSingleTitle}</h3>

            <ul className="post-info">
              <li>
                <span className="thumb">
                  <img src={"/images/resource/plane.webp"} alt="resource" />
                </span>
                Alison Dawn
              </li>
              <li>August 31, 2021</li>
              <li>12 Comment</li>
            </ul>
            {/* End post info */}
          </div>
        </div>
        {/* End auto-container */}

        <figure className="main-image">
          <img src={"/images/resource/plane.webp"} alt="resource" />
        </figure>

        <DetailsContent data={data.content} />
      </section>
      {/* <!-- End Blog Single --> */}

      <FooterDefault />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export async function getServerSideProps(context) {
  const { url } = context.query;
  var myHeaders = new Headers();
  myHeaders.append("auth", "MID-TravP-APAR07");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const apifetch = await fetch(
    `${host}get-blog-details/${url}/${siteId}`,
    requestOptions
  );
  const response = await apifetch.json();
  return {
    props: { data: response },
  };
}

export default BlogDetailsDynamic;
