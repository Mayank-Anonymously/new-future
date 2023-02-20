import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Terms from "../components/pages-menu/terms";
import { host, siteId } from "../static";

const index = ({ data }) => {
  return (
    <>
      <Seo pageTitle="Terms" />
      {data.length !== 0 || data.length !== undefined ? (
        <Terms data={data} />
      ) : (
        <span className="loading-text">
          <h2>Wait While We Fetch Your Data.</h2>
        </span>
      )}
    </>
  );
};
export async function getServerSideProps(context) {
  var resp = [];
  try {
    var myHeaders = new Headers();
    myHeaders.append("auth", "MID-TravG-APAR07");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const apifetch = await fetch(
      `${host}get-terms-conditionss/${siteId}`,
      requestOptions
    );
    const response = await apifetch.json();
    resp.push(response);
  } catch (error) {
    console.log(error);
  }
  return {
    props: { data: resp },
  };
}

export default index;
