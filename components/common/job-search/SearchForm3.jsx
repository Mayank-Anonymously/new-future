import Router from "next/router";
import Textinput from "../../customCompents/Textinput";
import { FiUser } from "react-icons/fi";
import { MdChair } from "react-icons/md";
import SearchEngineTab from "../../customCompents/EngineTab";
import { useState } from "react";
const SearchForm3 = () => {
  const [tripType, setTripType] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onClick={handleSubmit}>
      <div class="d-flex">
        <button
          class={`${
            tripType == 1
              ? "selected btn p-3 m-2 "
              : "bg-light p-3 m-2 text-black btn"
          }`}
          onClick={() => setTripType(1)}
        >
          One Way
        </button>
        <button
          class={`${
            tripType == 2
              ? "selected btn p-3 m-2"
              : "bg-light p-3 m-2 text-black btn"
          }`}
          onClick={() => setTripType(2)}
        >
          Two Way
        </button>
      </div>
      <div class="row">
        <button className="form-group btn col-lg-4 col-md-12 col-sm-12 mb-4 p-3 bg-light rounded ">
          <span class="px-2 border-end">
            <FiUser />
          </span>
          <span class="ml-2">1, Adult , 0 Children , 0 Infant</span>
        </button>
        <button className="form-group btn col-lg-4 col-md-12 col-sm-12 mb-4 p-3 bg-light rounded">
          <span class="px-2 border-end">
            <MdChair />
          </span>
          <span class="ml-2">Economy</span>
        </button>
      </div>

      <div className="row">
        <Textinput
          lg={3}
          md={12}
          sm={12}
          placeholder="From Where"
          icon={"fa fa-search"}
        />
        <Textinput
          lg={3}
          md={12}
          sm={12}
          placeholder="To Where"
          icon={"fa fa-search"}
        />
        <Textinput
          lg={2}
          md={12}
          sm={12}
          placeholder="From Date"
          icon={"fas fa-calendar-alt"}
        />
        <Textinput
          lg={3}
          md={12}
          sm={12}
          placeholder="To Date"
          icon={"fas fa-calendar-alt"}
        />
      </div>

      <div className="col-lg-11 col-md-11 col-sm-11 m-4">
        <button
          type="submit"
          className="theme-btn btn-style-one"
          // onClick={() => Router.push("/job-list-v3")}
        >
          Search Flight
        </button>
      </div>
    </form>
  );
};

export default SearchForm3;
