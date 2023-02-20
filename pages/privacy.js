import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Privacy from "../components/pages-menu/Privacy&Policy";
import { host, siteId } from "../static";

const index = ({ data }) => {
  return (
    <>
      <Seo pageTitle="Privacy" />
      <Privacy data={data} />
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
      `${host}get-privacy-policy/${siteId}`,
      requestOptions
    );
    const response = await apifetch.json();
    resp.push(response);
  } catch (error) {
    console.log(error.type);
  }
  return {
    props: { data: resp },
  };
}
export default index;
