import React from "react";

export const GetAllBlogs = () => {
  var myHeaders = new Headers();
  myHeaders.append("auth", "MID-TravP-APAR07");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("http://crm.midastravel.us/get-all-blogs/2", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log("result"))
    .catch((error) => console.log("error", error));
};
