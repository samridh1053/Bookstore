import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  AddContainer2,
  AddressContainer,
  AddressContainer1,
  AddressDetail,
  BookPrice,
  BookPriceDis,
  BottomContainer,
  Breadcrumbs,
  ButtonContainer,
  CardDetailsContainer,
  CardDetailsContainer2,
  CartContianer,
  CartItemCard,
  CartItemImg,
  CartItems,
  CartItemsContainer,
  CartItemsTitle,
  CartLeftContianer,
  CartOuterContainer,
  CartRightContainer,
  CartTag,
  DecrementButton,
  IncrementButton,
  IncrementContainer,
  ItemAuthor,
  ItemTitle,
  LinkTag,
  PlaceOrderButton,
  PriceContainer,
  RemoveBtn,
  TextContainer,
  UserDetail,
  UserDetail1,
  UserDetail3,
  UserDetail4,
  WorkContainer,
  WorkEdit,
  WorkInnerContainer,
  WorkInnerContainer2,
  WorkInnertext,
  WorkInnertext2,
} from "../styles/CartStyles";
import {
  deleteCartItem,
  getCartItem,
  placeOrder,
  updateCartItem,
} from "../services/CartServices";

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [orderOpen, setOrderOpen] = useState(false);

  const getCart = async () => {
    const cartItem = await getCartItem();
    setCartList(cartItem?.result);
  };

  const handleDecrement = async (book) => {
    setQuantity(quantity - 1);
    const quantityToBuy = {
      quantityToBuy: quantity,
    };
    await updateCartItem(book?._id, JSON.stringify(quantityToBuy));
  };

  const handleIncrement = async (book) => {
    setQuantity(quantity + 1);
    const quantityToBuy = {
      quantityToBuy: quantity,
    };
    await updateCartItem(book?._id, JSON.stringify(quantityToBuy));
  };

  const handleDelete = async (id) => {
    await deleteCartItem(id);
    console.log(id);
    window.location.reload();
  };

  const handleOpen = () => {
    setOrderOpen(true);
  };

  const checkOut = async () => {
    const OrderArray = cartList.map((item) => {
      return {
        product_id: item.product_id._id,
        product_name: item.product_id.bookName,
        product_quantity: item.quantityToBuy,
        product_price: item.product_id.discountPrice,
      };
    });
    const OrderObj = {
      orders: OrderArray,
    };
    console.log(OrderObj);
    await placeOrder(JSON.stringify(OrderObj));
    window.location.href = "/hurray";
  };

  useEffect(() => {
    getCart();
    console.log(cartList);
  }, [cartList[0]?.product_id.bookName || cartList]);
  return (
    <div>
      <Navbar />
      <CartOuterContainer>
        <CartContianer>
          <Breadcrumbs>
            <LinkTag href="/home">Home /</LinkTag>
            <CartTag>Cart</CartTag>
          </Breadcrumbs>
          <CartItemsContainer>
            <CartItemsTitle>My Cart ({cartList?.length})</CartItemsTitle>
            <CartItems>
              {cartList?.map((item) => (
                <CartItemCard key={item._id}>
                  <CartLeftContianer>
                    <CartItemImg src={require("../assests/Image 11.png")} />
                  </CartLeftContianer>
                  <CartRightContainer>
                    <ItemTitle>{item.product_id?.bookName}</ItemTitle>
                    <ItemAuthor>{item.product_id?.author}</ItemAuthor>
                    <PriceContainer>
                      <BookPriceDis>
                        Rs. {item.product_id?.discountPrice}
                      </BookPriceDis>
                      <BookPrice>Rs. {item.product_id?.price}</BookPrice>
                    </PriceContainer>
                    <BottomContainer>
                      <IncrementContainer>
                        <DecrementButton
                          onClick={() => handleDecrement(item.product_id)}
                        >
                          -
                        </DecrementButton>
                        <TextContainer>{quantity}</TextContainer>
                        <IncrementButton
                          onClick={() => handleIncrement(item.product_id)}
                        >
                          +
                        </IncrementButton>
                      </IncrementContainer>
                      <RemoveBtn onClick={() => handleDelete(item._id)}>
                        Remove
                      </RemoveBtn>
                    </BottomContainer>
                  </CartRightContainer>
                </CartItemCard>
              ))}
            </CartItems>
            <ButtonContainer>
              <PlaceOrderButton onClick={handleOpen}>
                Place order
              </PlaceOrderButton>
            </ButtonContainer>
          </CartItemsContainer>
          <CartItemsContainer>
            <CartItemsTitle>Customer Details</CartItemsTitle>
            <CardDetailsContainer>
              <UserDetail>
                <label>Full Name</label>
                <input type="text" style={{ padding: "5px" }} />
              </UserDetail>
              <UserDetail1>
                <label>Mobile Number</label>
                <input type="text" style={{ padding: "5px" }} />
              </UserDetail1>
            </CardDetailsContainer>
            <WorkContainer>
              <WorkInnerContainer>
                <input type="radio" name="2" />
                <WorkInnertext>
                  <b>1.Work</b>
                </WorkInnertext>
                <WorkEdit> Edit</WorkEdit>
              </WorkInnerContainer>
              <AddressContainer>
                <AddressContainer1>Address</AddressContainer1>
              </AddressContainer>
              <AddressDetail>
                <input
                  type="text"
                  placeholder="BridgeLabz Solutions LLP, No. 42, 14th Main, 15th Cross, Sector 4, Opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore"
                  style={{
                    width: "100%",
                    color: "#878787",
                    background: " #F5F5F5 0% 0% no-repeat padding-box",
                    outline: "none",
                  }}
                />
              </AddressDetail>
              <CardDetailsContainer2>
                <UserDetail3>
                  <label>City/Town</label>
                  <input type="text" style={{ padding: "5px" }} />
                </UserDetail3>
                <UserDetail4>
                  <label>State</label>
                  <input type="text" style={{ padding: "5px" }} />
                </UserDetail4>
              </CardDetailsContainer2>
              <WorkInnerContainer2>
                <input type="radio" name="2" />
                <WorkInnertext2>
                  <b>2.Home</b>
                </WorkInnertext2>
              </WorkInnerContainer2>
              <AddressContainer>
                <AddressContainer1>Address</AddressContainer1>
                <AddContainer2>
                  <p>
                    BridgeLabz Solutions LLP, No. 42, 14th Main, 15th Cross,
                    Sector 4, Opp to BDA complex, near Kumarakom restaurant, HSR
                    Layout, Bangalore
                  </p>
                </AddContainer2>
              </AddressContainer>
            </WorkContainer>
            <ButtonContainer>
              <PlaceOrderButton>Continue</PlaceOrderButton>
            </ButtonContainer>
          </CartItemsContainer>
          {orderOpen ? (
            <CartItemsContainer>
              <CartItemsTitle>Order Summary</CartItemsTitle>
              <CartItems>
                {cartList?.map((item) => (
                  <CartItemCard>
                    <CartLeftContianer>
                      <CartItemImg src={require("../assests/Image 11.png")} />
                    </CartLeftContianer>
                    <CartRightContainer>
                      <ItemTitle>{item.product_id?.bookName}</ItemTitle>
                      <ItemAuthor>{item.product_id?.author}</ItemAuthor>
                      <PriceContainer>
                        <BookPriceDis>
                          Rs. {item.product_id?.discountPrice}
                        </BookPriceDis>
                        <BookPrice>Rs. {item.product_id?.price}</BookPrice>
                      </PriceContainer>
                    </CartRightContainer>
                  </CartItemCard>
                ))}
              </CartItems>
              <ButtonContainer>
                <PlaceOrderButton onClick={checkOut}>Checkout</PlaceOrderButton>
              </ButtonContainer>
            </CartItemsContainer>
          ) : (
            <CartItemsContainer>
              <CartItemsTitle>Order Summary</CartItemsTitle>
            </CartItemsContainer>
          )}
        </CartContianer>
      </CartOuterContainer>

      <Footer />
    </div>
  );
};

export default Cart;
