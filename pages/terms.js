import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Terms from "../components/pages-menu/terms";

const index = () => {
  return (
    <>
      <Seo pageTitle="Terms" />
      <Terms />
    </>
  );
};

export default index;
