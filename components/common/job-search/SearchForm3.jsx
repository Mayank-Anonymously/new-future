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
