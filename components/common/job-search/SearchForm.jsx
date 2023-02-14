import Router from "next/router";
import { useState } from "react";
import Textinput from "../../customCompents/Textinput";
import Counter from "../../home-1/components/Counter";

const SearchForm = (name, e) => {
  const [divState, setDivState] = useState(0);
  const [tripType, setTripType] = useState(1);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onClick={handleSubmit}>
      <div className="row">
        <div className="form-group col-lg-2 col-md-12 col-sm-12 ">
          <div class="search-trip-type">
            <span
              onClick={() => setTripType(1)}
              className={
                tripType === 1 ? "btn search-trip-type-selected" : "btn"
              }
            >
              One way
            </span>
            <span
              onClick={() => setTripType(2)}
              className={
                tripType === 2 ? "btn search-trip-type-selected" : "btn"
              }
            >
              Two way
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        {/* <Textinput lg={3} md={12} sm={12} label={"Where from"}  value={searchEngineData.from} onChange={(e) => SerachFlight(e , "from")} /> */}
        <div className="form-group col-lg-3 col-md-12 col-sm-12">
          <i class="icon fa fa-search"></i>
          <input type="text" name="field_name" placeholder="Where from" />
        </div>
        <div className="form-group col-lg-3 col-md-12 col-sm-12">
          <i class="icon fa fa-search"></i>
          <input type="text" name="field_name" placeholder="Where to" />
        </div>
        <div className="form-group col-lg-2 col-md-12 col-sm-12">
          <i class="icon fa fa-calendar"></i>
          <input type="text" name="field_name" placeholder="From date" />
        </div>
        <div className="form-group col-lg-2 col-md-12 col-sm-12">
          <i class="icon fa fa-calendar"></i>
          <input type="text" name="field_name" placeholder="To date" />
        </div>
        <div className="form-group col-lg-3 col-md-12 col-sm-12">
          <i class=" icon fa fa-users"></i>
          <input
            type="select"
            readOnly
            name="field_name"
            placeholder="Passengers"
            // value={adult}
            onClick={() => setDivState(1)}
          />
          <div
            className={
              divState === 0 ? "select-div-invisible" : "select-div-visible"
            }
          >
            <Counter setDivState={setDivState} />
          </div>
        </div>
        {/* <!-- Form Group --> */}

        <div className="form-group col-lg-3 col-md-12 col-sm-12 location">
          <i class="icon fa fa-person-seat"></i>
          <input type="text" name="field_name" placeholder="Class" />
        </div>
        <div className="form-group col-lg-140 col-md-12 col-sm-12 btn-box">
          <button
            type="submit"
            className="theme-btn btn-style-one"
            onClick={() => Router.push("/job-list-v1")}
          >
            <span className="btn-title">Search</span>
          </button>
        </div>
        {/* <!-- Form Group --> */}
      </div>

      {/* End .row */}
    </form>
  );
};

export default SearchForm;
