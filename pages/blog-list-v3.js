import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import BlogListV3 from "../components/blog-meu-pages/blog-list-v3";

const iindex = () => {
  return (
    <>
      <Seo pageTitle="Blog List V3" />
      <BlogListV3 />
    </>
  );
};

export default dynamic(() => Promise.resolve(iindex), { ssr: false });
