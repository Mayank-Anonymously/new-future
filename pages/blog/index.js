import Seo from "../../components/common/Seo";
import { host, siteId } from "../../static";
import BlogListV3 from "../../components/blog-meu-pages/blog-list-v3";
const index = ({ data }) => {
  return (
    <>
      <Seo pageTitle="Blog List V3" />
      <BlogListV3 data={data} />
    </>
  );
};

export default index;

export const getServerSideProps = async () => {
  var myHeaders = new Headers();
  myHeaders.append("auth", "MID-TravP-APAR07");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const apiFetch = await fetch(
    `${host}get-all-blogs/${siteId}`,
    requestOptions
  );
  const resposne = await apiFetch.json();
  return {
    props: { data: resposne },
  };
};
