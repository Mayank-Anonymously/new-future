import Router from "next/router";
import Textinput from "../../customCompents/Textinput";
import { FiUser } from "react-icons/fi";
import { MdChair } from "react-icons/md";
const SearchForm3 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onClick={handleSubmit}>
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
        <Textinput lg={3} md={12} sm={12} placeholder="To where" />
        <Textinput lg={3} md={12} sm={12} placeholder="From when" />
        <Textinput lg={2} md={12} sm={12} placeholder="Till when" />
        <Textinput lg={3} md={12} sm={12} placeholder="Till when" />

        {/* </div> */}

        {/* <!-- Form Group --> */}
        {/* <div className="form-group col-lg-3 col-md-12 col-sm-12 location">
          <span className="icon flaticon-map-locator"></span>
          <input type="text" name="field_name" placeholder="City or postcode" />
        </div> */}

        {/* <!-- Form Group --> */}
        {/* <div className="form-group col-lg-3 col-md-12 col-sm-12 category">
          <span className="icon flaticon-briefcase"></span>
          <select className="chosen-single form-select">
            <option defaultValue="">All Categories</option>
            <option defaultValue="44">Accounting / Finance</option>
            <option defaultValue="106">Automotive Jobs</option>
            <option defaultValue="46">Customer</option>
            <option defaultValue="48">Design</option>
            <option defaultValue="47">Development</option>
            <option defaultValue="45">Health and Care</option>
            <option defaultValue="105">Marketing</option>
            <option value="107">Project Management</option>
          </select>
        </div> */}

        {/* <!-- Form Group --> */}
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
