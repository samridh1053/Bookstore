import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  BookPrice,
  BookPriceDis,
  BottomContainer,
  Breadcrumbs,
  ButtonContainer,
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
} from "../styles/CartStyles";
import {
  deleteCartItem,
  getCartItem,
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
            <CartItemsTitle>Address Details</CartItemsTitle>
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
                <PlaceOrderButton>Checkout</PlaceOrderButton>
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
