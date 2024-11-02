import React, { useState } from "react";
import Heading from "../common/Heading";
import { event } from "../data/Item";
import CommonHeading from "../common/CommonHeading";
import { Link } from "react-router-dom";

export default function Event() {
  const [menuItem, setMenuItem] = useState(event);
  const filterItems = (category) => {
    const newItems = event.filter((item) => item.category === category);
    setMenuItem(newItems);

    // for all data show
    if (category === "all") {
      setMenuItem(event);
      return;
    }
  };
  return (
    <>
      {/* <Heading title="Event" subtitle="Home" heading="Event" /> */}
      <div className="container-fluid event py-6">
        <div className="container">
          <CommonHeading
            title="Latest Events"
            description="Our Social & Professional Events Gallery"
          />
          <div className="tab-className text-center">
            <ul
              className="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp"
              data-wow-delay="0.1s"
            >
              <li className="nav-item p-2">
                <Link
                  // to="f"
                  className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill"
                  onClick={() => filterItems("all")}
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    All Events
                  </span>
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link
                  className="d-flex py-2 mx-2 border border-primary bg-light rounded-pill"
                  onClick={() => filterItems("wedding")}
                >
                  <span
                    className="text-dark pointer"
                    style={{ width: "150px" }}
                  >
                    Wedding
                  </span>
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link
                  className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill"
                  onClick={() => filterItems("corporate")}
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    Corporate
                  </span>
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link
                  className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill"
                  onClick={() => filterItems("cocktail")}
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    Cocktail
                  </span>
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link
                  className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill"
                  onClick={() => filterItems("buffet")}
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    Buffet
                  </span>
                </Link>
              </li>
            </ul>

            <div className="tab-content">
              <div className="fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      {menuItem.map((val, index) => (
                        <div
                          key={index}
                          className="col-md-6 col-lg-3 wow bounceInUp"
                          data-wow-delay="0.1s"
                        >
                          <div className="event-img position-relative">
                            <img
                              className="img-fluid rounded w-100"
                              src={val.image}
                              alt="img"
                            />
                            <div className="event-overlay d-flex flex-column p-4">
                              <h4 className="me-auto">{val.category}</h4>
                              <Link href="" className="my-auto">
                                {val.icon}
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
