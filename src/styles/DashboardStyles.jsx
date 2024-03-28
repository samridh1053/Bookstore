import styled from "styled-components";

export const DashboardOuterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DashboardContianer = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  width: 100%;
  max-width: 1000px;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  padding: 20px 0px;
  gap: 5px;
  /* background-color: cyan; */
`;

export const SortContainer = styled.div`
  display: flex;
  font: normal normal normal 12px/15px Lato;
  letter-spacing: 0px;
  color: #0a0102;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e2e2e2;
  border-radius: 1px;
  align-items: center;
  height: fit-content;
  padding: 10px 20px;
  cursor: pointer;
  position: relative;
  z-index: 9;
`;

export const SortUnderContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  width: calc(100% - 30px);
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  border: 1px solid #e2e2e2;
  border-radius: 1px;
`;

export const SortSetting = styled.p`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const DashboardTitle = styled.h1`
  font: normal normal normal 25px/33px Roboto;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const DashboardTag = styled.p`
  display: flex;
  margin: 0;
  padding: 0 0 4px 0;
  font: normal normal normal 12px/16px Roboto;
  color: #9d9d9d;
  align-items: end;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: space-between;
  row-gap: 20px;
`;

export const Card = styled.a`
  text-decoration: none;
  cursor: pointer;
  width: 230px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e2e2;
  border-radius: 3px;
`;

export const CardImgContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #f5f5f5;
  align-items: center;
  justify-content: center;
  background: #f5f5f5 0% 0% no-repeat padding-box;
  padding: 20px 0;
`;

export const CardImg = styled.img`
  width: 105px;
  height: 135px;
`;

export const CardBottomContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const BookTitle = styled.h2`
  font: normal normal normal 14px/19px Roboto;
  letter-spacing: 0px;
  color: #0a0102;
  margin: 0;
  padding: 0;
`;

export const BookAuthor = styled.p`
  font: normal normal normal 10px/13px Roboto;
  letter-spacing: 0px;
  color: #878787;
  margin: 0;
  padding: 0;
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

export const BookRatingcontainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: flex-end;
`;
export const BookRating = styled.div`
  display: flex;
  gap: 3px;
  background: #388e3c 0% 0% no-repeat padding-box;
  font: normal normal bold 10px/13px Roboto;
  border-radius: 1px;
  width: fit-content;
  color: white;
  align-items: center;
  padding: 2px 5px;
`;

export const RatingNumber = styled.p`
  font: normal normal normal 10px/13px Roboto;
  letter-spacing: 0px;
  color: #878787;
  padding: 0;
  margin: 0;
`;
