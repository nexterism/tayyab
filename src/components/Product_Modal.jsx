import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Product_Modal extends Component {
  state = { count: 0 };
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrementCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <div>
        <div className="modal fade rounded-0" id="myModal">
          <div className="modal-content modal-dialog modal-lg rounded-0">
            <div className="modal-body rounded-0">
              <button
                type="button"
                className="close d-flex justify-content-center p-2"
                data-dismiss="modal"
              >
                &times;
              </button>

              <div className="container postdetails">
                <div className="row py-5">
                  <div className="col-md-5 p-1">
                    <img
                      className="maginify w-100"
                      src="images/b3.jpg"
                      alt="watch"
                    />
                  </div>
                  <div className="col-md-7 px-3">
                    <span>Smartphone</span>
                    <h3>Notebook White Spire</h3>
                    <h2>RS. 2,299</h2>
                    <div className="row d-flex align-items-end flex-row">
                      <div className="col-md-3">
                        <h6 className="">Color</h6>
                      </div>
                      <select className="form-control form-control-sm col-md-5">
                        <option>White</option>
                        <option>Black</option>
                      </select>
                    </div>
                    <div className="list">
                      <ul className="p-3">
                        <li>4.5 inch HD Screen</li>
                        <li>ndroid 4.4 KitKat OS</li>
                        <li>1.4 GHz Quad Core™ Processor</li>
                        <li>20 MP front Camera</li>
                      </ul>
                    </div>
                    <h6>Quantity</h6>
                    <div className="quantity">
                      <div className="row">
                        <div className="ml-3 p-2 col-md-3 d-flex align-items-cneter border justify-content-between flex-row">
                          <span>
                            <i
                              className="fa fa-minus flex-start"
                              onClick={this.decrementCount}
                            ></i>
                          </span>
                          <span className="">{this.state.count}</span>
                          <span>
                            <i
                              className="fa fa-plus"
                              onClick={this.incrementCount}
                            ></i>
                          </span>
                        </div>
                        <div className="col">
                          <Link
                            to="/checkout"
                            type="button"
                            className="btn p-2 px-3 text-uppercase rounded-0"
                          >
                            <i className="flaticon-shopping-bag pr-2"></i>
                            Add to Cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
