import Link from "next/link";
import jobFeatured from "../../data/job-featured";
import FlightRoutes from "../../data/routes.js";
import { useState } from "react";

const FightFilterTab = () => {
  const [tabId, setTabId] = useState(2);
  const [tabs, setTab] = useState([
    { id: 1, name: "All", isActive: false },
    { id: 2, name: "Busiest", isActive: true },
    { id: 3, name: "Cheap ", isActive: false },
    { id: 4, name: "Most travlled", isActive: false },
  ]);

  // tab handler
  const tabHandler = (id) => {
    // active tab
    setTab((old) =>
      old?.map((tab) => {
        tab.isActive = false;
        if (tab.id === id) {
          tab.isActive = true;
        }
        return tab;
      })
    );
    // set id of tab
    setTabId(id);
  };

  return (
    <>
      {/* <!--Tabs Box--> */}
      <ul className="tab-buttons">
        {tabs?.map((tab) => (
          <li
            onClick={() => tabHandler(tab.id)}
            key={tab.id}
            className={`${tab.isActive ? "active-btn" : ""} tab-btn`}
          >
            {tab.name}
          </li>
        ))}
      </ul>

      {/* <!--Tab--> */}
      <div className="tab active-tab" data-aos="fade-up">
        <div className="row">
          {/* all tab */}
          {tabId === 1 ? (
            <>
              {FlightRoutes.slice(0, 6).map((item) => (
                <div
                  className="job-block col-lg-6 col-md-12 col-sm-12"
                  key={item.id}
                >
                  <div className="inner-box">
                    <div className="content">
                      <span className="company-logo">
                        <img src={item.logo} alt="item brand" />
                      </span>
                      <h4>
                        <Link href={`/job-single-v5/${item.id}`}>
                          {item.route}
                        </Link>
                      </h4>

                      <ul className="job-info">
                        <li>
                          <span className="icon flaticon-briefcase"></span>
                          All Classes
                        </li>
                        {/* compnay info */}
                        <li>
                          <span className="icon flaticon-map-locator"></span>
                          {item.country}
                        </li>
                        {/* location info */}
                        <li>
                          <span className="icon flaticon-clock-3"></span>{" "}
                          {item.duration}
                        </li>
                        {/* time info */}
                        <li>
                          <span className="icon flaticon-money"></span>{" "}
                          {item.price}
                        </li>
                        {/* salary info */}
                      </ul>
                      {/* End .job-info */}

                      <ul className="job-other-info">
                        {item.fareType?.map((val, i) => (
                          <li key={i} className={`${val.styleClass}`}>
                            {val.type}
                          </li>
                        ))}
                      </ul>
                      {/* End .job-other-info */}

                      <button className="bookmark-btn">
                        <span className="flaticon-bookmark"></span>
                      </button>
                    </div>
                  </div>
                </div>
                // End job-block
              ))}
            </>
          ) : undefined}
          {/* trending tab */}
          {tabId === 2 ? (
            <>
              {FlightRoutes.slice(10, 16).map((item) => (
                <div
                  className="job-block col-lg-6 col-md-12 col-sm-12"
                  key={item.id}
                >
                  <div className="inner-box">
                    <div className="content">
                      <span className="company-logo">
                        <img src={item.logo} alt="item brand" />
                      </span>
                      <h4>
                        <Link href={`/job-single-v5/${item.id}`}>
                          {item.route}
                        </Link>
                      </h4>

                      <ul className="job-info">
                        <li>
                          <span className="icon flaticon-briefcase"></span>
                          All Classes
                        </li>
                        {/* compnay info */}
                        <li>
                          <span className="icon flaticon-map-locator"></span>
                          {item.country}
                        </li>
                        {/* location info */}
                        <li>
                          <span className="icon flaticon-clock-3"></span>{" "}
                          {item.duration}
                        </li>
                        {/* time info */}
                        <li>
                          <span className="icon flaticon-money"></span>{" "}
                          {item.price}
                        </li>
                        {/* salary info */}
                      </ul>
                      {/* End .job-info */}

                      <ul className="job-other-info">
                        {item.fareType?.map((val, i) => (
                          <li key={i} className={`${val.styleClass}`}>
                            {val.type}
                          </li>
                        ))}
                      </ul>
                      {/* End .job-other-info */}

                      <button className="bookmark-btn">
                        <span className="flaticon-bookmark"></span>
                      </button>
                    </div>
                  </div>
                </div>
                // End job-block
              ))}
            </>
          ) : undefined}
          {/* design tab  */}
          {tabId === 3 ? (
            <>
              {FlightRoutes.slice(16, 22).map((item) => (
                <div
                  className="job-block col-lg-6 col-md-12 col-sm-12"
                  key={item.id}
                >
                  <div className="inner-box">
                    <div className="content">
                      <span className="company-logo">
                        <img src={item.logo} alt="item brand" />
                      </span>
                      <h4>
                        <Link href={`/job-single-v5/${item.id}`}>
                          {item.route}
                        </Link>
                      </h4>

                      <ul className="job-info">
                        <li>
                          <span className="icon flaticon-briefcase"></span>
                          All Classes
                        </li>
                        {/* compnay info */}
                        <li>
                          <span className="icon flaticon-map-locator"></span>
                          {item.country}
                        </li>
                        {/* location info */}
                        <li>
                          <span className="icon flaticon-clock-3"></span>{" "}
                          {item.duration}
                        </li>
                        {/* time info */}
                        <li>
                          <span className="icon flaticon-money"></span>{" "}
                          {item.price}
                        </li>
                        {/* salary info */}
                      </ul>
                      {/* End .job-info */}

                      <ul className="job-other-info">
                        {item.fareType?.map((val, i) => (
                          <li key={i} className={`${val.styleClass}`}>
                            {val.type}
                          </li>
                        ))}
                      </ul>
                      {/* End .job-other-info */}

                      <button className="bookmark-btn">
                        <span className="flaticon-bookmark"></span>
                      </button>
                    </div>
                  </div>
                </div>
                // End job-block
              ))}
            </>
          ) : undefined}
          {/* marketing tab  */}
          {tabId === 4 ? (
            <>
              {FlightRoutes.slice(22, 28).map((item) => (
                <div
                  className="job-block col-lg-6 col-md-12 col-sm-12"
                  key={item.id}
                >
                  <div className="inner-box">
                    <div className="content">
                      <span className="company-logo">
                        <img src={item.logo} alt="item brand" />
                      </span>
                      <h4>
                        <Link href={`/job-single-v5/${item.id}`}>
                          {item.route}
                        </Link>
                      </h4>

                      <ul className="job-info">
                        <li>
                          <span className="icon flaticon-briefcase"></span>
                          All Classes
                        </li>
                        {/* compnay info */}
                        <li>
                          <span className="icon flaticon-map-locator"></span>
                          {item.country}
                        </li>
                        {/* location info */}
                        <li>
                          <span className="icon flaticon-clock-3"></span>{" "}
                          {item.duration}
                        </li>
                        {/* time info */}
                        <li>
                          <span className="icon flaticon-money"></span>{" "}
                          {item.price}
                        </li>
                        {/* salary info */}
                      </ul>
                      {/* End .job-info */}

                      <ul className="job-other-info">
                        {item.fareType?.map((val, i) => (
                          <li key={i} className={`${val.styleClass}`}>
                            {val.type}
                          </li>
                        ))}
                      </ul>
                      {/* End .job-other-info */}

                      <button className="bookmark-btn">
                        <span className="flaticon-bookmark"></span>
                      </button>
                    </div>
                  </div>
                </div>
                // End job-block
              ))}
            </>
          ) : undefined}
          {/* helth tab */}{" "}
          {tabId === 5 ? (
            <>
              {FlightRoutes.slice(22, 28).map((item) => (
                <div
                  className="job-block col-lg-6 col-md-12 col-sm-12"
                  key={item.id}
                >
                  <div className="inner-box">
                    <div className="content">
                      <span className="company-logo">
                        <img src={item.logo} alt="item brand" />
                      </span>
                      <h4>
                        <Link href={`/job-single-v5/${item.id}`}>
                          {item.route}
                        </Link>
                      </h4>

                      <ul className="job-info">
                        <li>
                          <span className="icon flaticon-briefcase"></span>
                          All Classes
                        </li>
                        {/* compnay info */}
                        <li>
                          <span className="icon flaticon-map-locator"></span>
                          {item.country}
                        </li>
                        {/* location info */}
                        <li>
                          <span className="icon flaticon-clock-3"></span>{" "}
                          {item.duration}
                        </li>
                        {/* time info */}
                        <li>
                          <span className="icon flaticon-money"></span>{" "}
                          {item.price}
                        </li>
                        {/* salary info */}
                      </ul>
                      {/* End .job-info */}

                      <ul className="job-other-info">
                        {item.fareType?.map((val, i) => (
                          <li key={i} className={`${val.styleClass}`}>
                            {val.type}
                          </li>
                        ))}
                      </ul>
                      {/* End .job-other-info */}

                      <button className="bookmark-btn">
                        <span className="flaticon-bookmark"></span>
                      </button>
                    </div>
                  </div>
                </div>
                // End job-block
              ))}
            </>
          ) : undefined}
        </div>
      </div>
    </>
  );
};

export default FightFilterTab;
