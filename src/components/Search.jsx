import React, { Component } from "react";
import { Link } from "react-router-dom";
import Product_Modal from "./Product_Modal";

export default class Search extends Component {
  state = {
    Headphones: [
      {
        src: "images/b2.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/b1.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/a3.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/a.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/b3.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/b2.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/b1.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/a3.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/a.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/b3.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/b2.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/b1.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/a3.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/a.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/b3.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/b2.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/b1.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "1,900",
      },
      {
        src: "images/a3.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "150",
      },
      {
        src: "images/a.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "150",
      },
      {
        src: "images/b3.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "150",
      },
      {
        src: "images/b2.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "150",
      },
      {
        src: "images/b1.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "150",
      },
      {
        src: "images/a3.jpg",
        Title: "Mobile & Tablets",
        Heading: "Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)",
        price: "150",
      },
    ],
  };
  render() {
    return (
      <div>
        <div className="page-head_agile_info_w3l"></div>
        <div className="services-breadcrumb">
          <div className="agile_inner_breadcrumb">
            <div className="container">
              <ul className="w3_short">
                <li>
                  <Link to="/">Home</Link>
                  <i>|</i>
                </li>
                <li>Search Results</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container p-0 row m-auto">
          {/* <div className="col-lg-3 col-6 mt-lg-0 p-lg-0">
            <div className="px-3 pt-2">
              <div className="search-hotel border-bottom py-2">
                <h3 className="mb-3">Brand</h3>
                <div className="left-side py-2">
                  <ul className="p-0">
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">Electronics</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">ELECTRON</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">Electronic</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">Generic</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">mono</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">ACR Electronics</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">NAXA Electronics</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">Techno electronics</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">TC Electronic</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">Robodo Electronics</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">JJ Electronic</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="customer-review border-bottom left-side py-2">
                <h3 className="mb-3">Customer Review</h3>
                <ul className="p-0">
                  <li>
                    <a href="#">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <span>5.0</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                      <span>4.0</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star-half-o" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                      <span>3.5</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                      <span>3.0</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star-half-o" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                      <span>2.5</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="range border-bottom py-2">
                <h3 className="mb-3">Price</h3>
                <div className="w3l-range">
                  <ul className="p-0">
                    <li>
                      <a href="#">Under RS. 100</a>
                    </li>
                    <li className="my-1">
                      <a href="#">RS. 100 - RS. 500</a>
                    </li>
                    <li>
                      <a href="#">RS. 500 - RS. 1,000</a>
                    </li>
                    <li className="my-1">
                      <a href="#">RS. 1,000 - RS. 2,000</a>
                    </li>
                    <li>
                      <a href="#">RS. 2,000 RS. 3,000</a>
                    </li>
                    <li className="mt-1">
                      <a href="#">Over RS. 3,000</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="left-side border-bottom py-2">
                <h3 className="mb-3">Cash On Delivery</h3>
                <ul className="p-0">
                  <li>
                    <input type="checkbox" className="checked" />
                    <span className="span">Eligible for Cash On Delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <div className="col py-5">
            <p className="pb-4 text-center h5">
              Search Result: 24 items found for "headphones"
            </p>
            <div className="product w-100 m-auto">
              <div className="row col-12 m-0 p-0 w-100">
                {this.state.Headphones.slice(0, this.state.visible).map(
                  (v, k) => {
                    return (
                      <React.Fragment key={k}>
                        <div className="card col-6 col-md-4 col-lg-3 p-0">
                          <div className="border bg-white cardss m-1 mb-3">
                            <Link to={`/postdetail/${v._id}`}>
                              <img
                                className="img-fluid img-responsive w-100"
                                src={v.src}
                                alt=""
                              />
                              <span className="p-2">{v.Title}</span>
                              <h5 className="py-1 px-2 mb-2 m-0">
                                {v.Heading}
                              </h5>
                            </Link>
                            <p className="price m-0 d-flex justify-content-center align-items-center">
                              RS.{v.price}
                            </p>
                            <div className="p-2 d-flex justify-content-between">
                              <span
                                type="button"
                                className="btn p-0 text-uppercase rounded-0"
                                data-toggle="modal"
                                data-target="#myModal"
                              >
                                <i className="fa fa-eye"></i>
                                Quik View
                              </span>
                              <span
                                type="button"
                                className="btn p-0 text-uppercase rounded-0"
                                // data-toggle="modal"
                                // data-target="#myModal"
                              >
                                <i className="fa fa-heart"></i>
                                Wishlist
                              </span>
                            </div>
                            <Link
                              to="/checkout"
                              type="button"
                              className="btn m-2 text-uppercase rounded-0"
                            >
                              Add to Cart
                            </Link>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  }
                )}
                <Product_Modal />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
