import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Breadcrumbs,
  CartContianer,
  CartOuterContainer,
  CartTag,
  LinkTag,
} from "../styles/CartStyles";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <CartOuterContainer>
        <CartContianer>
          <Breadcrumbs>
            <LinkTag href="/home">Home /</LinkTag>
            <CartTag>Cart</CartTag>
          </Breadcrumbs>
        </CartContianer>
      </CartOuterContainer>

      <Footer />
    </div>
  );
};

export default Cart;
