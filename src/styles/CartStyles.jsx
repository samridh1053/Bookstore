import styled from "styled-components";

export const CartOuterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartContianer = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Breadcrumbs = styled.div`
  display: flex;
  gap: 5px;
  padding: 20px 0;
`;

export const LinkTag = styled.a`
  text-decoration: none;
  cursor: pointer;
  font: normal normal normal 12px/16px Roboto;
  letter-spacing: 0px;
  color: #9d9d9d;
`;

export const CartTag = styled.p`
  font: normal normal normal 12px/16px Roboto;
  letter-spacing: 0px;
  color: black;
  margin: 0;
  padding: 0;
`;

export const CartItemsContainer = styled.div`
  border: 1px solid #707070;
  padding: 16px 36px;
  width: 100%;
  max-width: 774px;
  gap: 36px;
  display: flex;
  flex-direction: column;
`;

export const CartItemsTitle = styled.h2`
  font: normal normal 18px/24px Roboto;
  font-weight: 550;
  letter-spacing: 0px;
  color: #0a0102;
  padding: 0;
  margin: 0;
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 15px;
`;

export const CartItemCard = styled.div`
  display: flex;
  gap: 24px;
`;

export const CartLeftContianer = styled.div`
  display: flex;
  width: 18%;
  /* background-color: beige; */
`;

export const CartRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 8px;
  /* background-color: greenyellow; */
`;

export const CartItemImg = styled.img`
  width: 100%;
  height: fit-content;
`;

export const ItemTitle = styled.h4`
  padding: 0;
  margin: 0;
  font: normal normal 14px/17px Lato;
  letter-spacing: 0px;
  color: #0a0102;
`;

export const ItemAuthor = styled.p`
  padding: 0;
  margin: 0;
  font: normal normal 10px/12px Lato;
  letter-spacing: 0px;
  color: #9d9d9d;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;

export const BookPriceDis = styled.p`
  font: normal normal bold 12px/16px Roboto;
  letter-spacing: 0px;
  color: #0a0102;
  margin: 0;
  padding: 0;
`;

export const BookPrice = styled.p`
  text-decoration: line-through;
  font: normal normal normal 10px/13px Roboto;
  letter-spacing: 0px;
  color: #878787;
  margin: 0;
  padding: 0;
`;

export const BottomContainer = styled.div`
  display: flex;
  gap: 36px;
  align-items: center;
  padding-top: 30px;
  /* justify-content: space-between; */
`;

export const IncrementContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const IncrementButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
  cursor: pointer;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 16px;
  border: 1px solid #dbdbdb;
  font: normal normal 14px/17px Lato;
  font-weight: 500;
  letter-spacing: 0px;
  color: #333232;
`;

export const DecrementButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 12px; */
  height: 24px;
  width: 24px;
  border-radius: 100%;
  border: 1px solid #dbdbdb;
  cursor: pointer;
`;

export const RemoveBtn = styled.div`
  font: normal normal normal 12px/15px Lato;
  letter-spacing: 0px;
  color: #0a0102;
  display: flex;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;

export const PlaceOrderButton = styled.div`
  display: flex;
  width: fit-content;
  background-color: #3371b5;
  flex-direction: row;
  border-radius: 3px;
  font: normal normal medium 14px/17px Lato;
  text-transform: uppercase;
  color: white;
  padding: 10px 26px;
  text-decoration: none;
  cursor: pointer;
`;
