import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Home4 from "../components/home-4";
import { host, siteId } from "../static";

const index = ({ data }) => {
  return (
    <>
      <Seo pageTitle="vflyyou" />
      <Home4 data={data} />
    </>
  );
};

// export const getServerSideProps = async () => {
//   var myHeaders = new Headers();
//   myHeaders.append("auth", "MID-TravP-APAR07");

//   var requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow",
//   };

//   const apiFetch = await fetch(
//     `${host}get-recent-blogs/${siteId}`,
//     requestOptions
//   );
//   const response = await apiFetch.json();
//   return {
//     props: { data: response }, // will be passed to the page component as props
//   };
// };

export default index;
