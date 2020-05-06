import React, { Component } from "react";
import { Route } from "react-router-dom";
import "../css/styles.scss";
import Navbar from "./Header/Index";
import Home from "./Home_Route/Home";
import Features_Sale from "./Footer/Features_Sale";
import Features from "./Footer/Features";
import Footer from "./Footer/Footer";
import postdetails from "./postdetails/postdetails";
import Search from "./Search";
import help from "./help";
import privacy from "./privacy";
import CheckOut from "./CheckOut";
import Payment from "./payment";
import Term from "./Term";
import Reset from "./Login-Register/Reset";
import ContactUs from "./ContactUs";
import StoreLocation from "./StoreLocation";
import Account from "./Login-Register";
import WishList from "./WishList";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/postdetail" component={postdetails} />
        <Route path="/search" component={Search} />
        <Route path="/Term" component={Term} />
        <Route path="/help" component={help} />
        <Route path="/privacy" component={privacy} />
        <Route path="/CheckOut" component={CheckOut} />
        <Route path="/payment" component={Payment} />
        <Route path="/account" component={Account} />
        <Route path="/reset" component={Reset} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/store-location" component={StoreLocation} />
        <Route path="/wishlist" component={WishList} />
        <Features />
        <Features_Sale />
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
