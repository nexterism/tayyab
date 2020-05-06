import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Axios from "axios";
import { withRouter } from "react-router-dom";
class postdetails extends Component {
  state = { postdetails: [], count: 0 };
  // componentDidMount() {
  //   Axios.get("/postdata").then(resp => {
  //     let filter = resp.data.filter(d => d._id == this.props.match.params.id);
  //     this.setState({
  //       postdetails: filter
  //     });
  //   });
  // }
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
    // let res = this.state.postdetails.map((res, i) => {
    //   return (
    //     <React.Fragment key={i}>
    //       <div className="row">
    //         <div className="col-md-5">
    //           <img
    //             style={{ width: "100%" }}
    //             className="maginify"
    //             src={res.image}
    //             alt=""
    //           />
    //         </div>
    //         <div className="col-md-7">
    //           <p>{res.Title}</p>
    //           <h1>{res.Heading}</h1>
    //           <hr /> <br />
    //           <span>
    //             <i className="fa fa-heart"></i> Wishlist{" "}
    //           </span>
    //           <span>
    //             <i className="fa fa-refresh"></i> Compare
    //           </span>
    //           <div className="list">
    //             <ul className="list-unstyled">
    //               <li>
    //                 Products
    //                 <p>{res.Desc}</p>
    //               </li>
    //             </ul>
    //           </div>
    //           <h1 style={{ fontSize: "35px" }}>{res.price}</h1>
    //         </div>
    //       </div>
    //     </React.Fragment>
    //   );
    // });
    return (
      <React.Fragment>
        <div className="container py-5 postdetails">
          {/* {res} */}
          <div className="row py-5">
            <div className="col-md-5 p-1">
              {/* <img className="maginify w-100" src="https://demo2.madrasthemes.com/electro/wp-content/uploads/2016/03/Smartphone2-330x308.jpg" alt="" /> */}
              <div class="preview">
                <div class="preview-pic tab-content">
                  <div class="tab-pane active" id="pic-1">
                    <img src="/images/b2.jpg" />
                  </div>
                  <div class="tab-pane" id="pic-2">
                    <img src="/images/b1.jpg" />
                  </div>
                  <div class="tab-pane" id="pic-3">
                    <img src="/images/a3.jpg" />
                  </div>
                  <div class="tab-pane" id="pic-4">
                    <img src="/images/a.jpg" />
                  </div>
                  <div class="tab-pane" id="pic-5">
                    <img src="/images/b3.jpg" />
                  </div>
                </div>
                <ul class="preview-thumbnail nav nav-tabs d-flex justify-content-between">
                  <li class="active">
                    <a data-target="#pic-1" data-toggle="tab">
                      <img src="/images/b2.jpg" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-2" data-toggle="tab">
                      <img src="/images/b1.jpg" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-3" data-toggle="tab">
                      <img src="/images/a3.jpg" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-4" data-toggle="tab">
                      <img src="/images/a.jpg" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-5" data-toggle="tab">
                      <img src="/images/b3.jpg" />
                    </a>
                  </li>
                </ul>
              </div>
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
          <div className="Tabs py-5">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 ">
                  <nav>
                    <div
                      className="nav nav-tabs nav-fill"
                      id="nav-tab"
                      role="tablist"
                    >
                      {/* <a
                        className="nav-item nav-link active"
                        id="nav-home-tab"
                        data-toggle="tab"
                        href="#nav-home"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        Accessories
                      </a> */}
                      <a
                        className="nav-item nav-link"
                        id="nav-profile-tab"
                        data-toggle="tab"
                        href="#nav-profile"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        Description
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-contact-tab"
                        data-toggle="tab"
                        href="#nav-contact"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        Specification
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-about-tab"
                        data-toggle="tab"
                        href="#nav-about"
                        role="tab"
                        aria-controls="nav-about"
                        aria-selected="false"
                      >
                        Reviews
                      </a>
                    </div>
                  </nav>
                  <div
                    className="tab-content py-3 px-3 px-sm-0"
                    id="nav-tabContent"
                  >
                    {/* <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      Et et consectetur ipsum labore excepteur est proident
                      excepteur ad velit occaecat qui minim occaecat veniam.
                      Fugiat veniam incididunt anim aliqua enim pariatur veniam
                      sunt est aute sit dolor anim. Velit non irure adipisicing
                      aliqua ullamco irure incididunt irure non esse consectetur
                      nostrud minim non minim occaecat. Amet duis do nisi duis
                      veniam non est eiusmod tempor incididunt tempor dolor
                      ipsum in qui sit. Exercitation mollit sit culpa nisi culpa
                      non adipisicing reprehenderit do dolore. Duis
                      reprehenderit occaecat anim ullamco ad duis occaecat ex.
                    </div> */}
                    <div
                      className="tab-pane fade show active"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      Et et consectetur ipsum labore excepteur est proident
                      excepteur ad velit occaecat qui minim occaecat veniam.
                      Fugiat veniam incididunt anim aliqua enim pariatur veniam
                      sunt est aute sit dolor anim. Velit non irure adipisicing
                      aliqua ullamco irure incididunt irure non esse consectetur
                      nostrud minim non minim occaecat. Amet duis do nisi duis
                      veniam non est eiusmod tempor incididunt tempor dolor
                      ipsum in qui sit. Exercitation mollit sit culpa nisi culpa
                      non adipisicing reprehenderit do dolore. Duis
                      reprehenderit occaecat anim ullamco ad duis occaecat ex.
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
                    >
                      Et et consectetur ipsum labore excepteur est proident
                      excepteur ad velit occaecat qui minim occaecat veniam.
                      Fugiat veniam incididunt anim aliqua enim pariatur veniam
                      sunt est aute sit dolor anim. Velit non irure adipisicing
                      aliqua ullamco irure incididunt irure non esse consectetur
                      nostrud minim non minim occaecat. Amet duis do nisi duis
                      veniam non est eiusmod tempor incididunt tempor dolor
                      ipsum in qui sit. Exercitation mollit sit culpa nisi culpa
                      non adipisicing reprehenderit do dolore. Duis
                      reprehenderit occaecat anim ullamco ad duis occaecat ex.
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-about"
                      role="tabpanel"
                      aria-labelledby="nav-about-tab"
                    >
                      Et et consectetur ipsum labore excepteur est proident
                      excepteur ad velit occaecat qui minim occaecat veniam.
                      Fugiat veniam incididunt anim aliqua enim pariatur veniam
                      sunt est aute sit dolor anim. Velit non irure adipisicing
                      aliqua ullamco irure incididunt irure non esse consectetur
                      nostrud minim non minim occaecat. Amet duis do nisi duis
                      veniam non est eiusmod tempor incididunt tempor dolor
                      ipsum in qui sit. Exercitation mollit sit culpa nisi culpa
                      non adipisicing reprehenderit do dolore. Duis
                      reprehenderit occaecat anim ullamco ad duis occaecat ex.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(postdetails);
