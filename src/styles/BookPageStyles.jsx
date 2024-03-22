import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const BookOuterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BookContianer = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  width: 100%;
  max-width: 1000px;
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

export const BookTag = styled.p`
  font: normal normal normal 12px/16px Roboto;
  letter-spacing: 0px;
  color: black;
  margin: 0;
  padding: 0;
`;

export const BookPartition = styled.div`
  width: 100%;
  display: flex;
  /* gap: 50px; */
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 45%;
  height: 80vh;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const BookImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 79%;
  height: 80vh;
`;

export const BookImage = styled.div`
  display: flex;
  width: 99.5%;
  height: 55vh;
  border: 1px solid #d1d1d1;
  /* background-color: greenyellow; */
  justify-content: space-evenly;
  padding-top: 4vh;
`;

export const CardImage3 = styled.img`
  height: 50vh;
  width: 20vw;
`;

export const SmallBooksContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 22%;
`;

export const SmallBooksContainer1 = styled.div`
  display: flex;
  height: 15vh;
  width: 7vw;
  outline: 2px;
  background-color: #ffe7e9;
  border: 1px solid #7c1e1e;
  justify-content: space-evenly;
  padding-top: 1vh;
`;

export const CardImage = styled.img`
  height: 14vh;
  width: 6vw;
`;

export const CardImage2 = styled.img`
  height: 14vh;
  width: 6vw;
`;

export const SmallBooksContainer2 = styled.div`
  display: flex;
  height: 15vh;
  width: 7vw;
  outline: 2px;
  border: 1px solid #d1d1d1;
  justify-content: space-evenly;
  padding-top: 1vh;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 10vh;
  width: 100%;
  /* background-color: blue; */
  justify-content: space-between;
  padding-top: 4vh;
`;

export const AddButton = styled.button`
  display: flex;
  width: 11vw;
  height: 6vh;
  font: normal normal normal 14px/19px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  background-color: #a03037;
  border: none;
  padding: 3px 15px;
  border-radius: 2px;
  cursor: pointer;
  align-items: center;
  justify-content: space-evenly;
`;

export const WishButton = styled.button`
  display: flex;
  width: 11vw;
  height: 6vh;
  font: normal normal normal 14px/19px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  background-color: #333333;
  border: none;
  padding: 3px 15px;
  border-radius: 2px;
  cursor: pointer;
  align-items: center;
  justify-content: space-evenly;
`;

export const FavoriteIconContainer = styled(FavoriteIcon)`
  cursor: pointer;
`;

export const RightContainer = styled.div`
  width: 55%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  /* background-color: blue; */
  padding: 0 50px;
  gap: 5px;
  @media (max-width: 800px) {
    width: 100%;
    padding: 0;
  }
`;

export const TitleTag = styled.h1`
  display: flex;
  margin: 0;
  font: normal normal normal 28px/37px Roboto;
  letter-spacing: 0px;
  color: #0a0102;
`;

export const AuthorTag = styled.p`
  display: flex;
  margin: 0;
  font: normal normal normal 18px/24px Roboto;
  letter-spacing: 0px;
  color: #878787;
`;

export const BookRatingcontainer = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;
export const BookRating = styled.div`
  display: flex;
  gap: 3px;
  background: #388e3c 0% 0% no-repeat padding-box;
  font: normal normal bold 14px/19px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  border-radius: 1px;
  width: fit-content;
  align-items: center;
  padding: 2px 5px;
`;

export const RatingNumber = styled.p`
  font: normal normal normal 15px/20px Roboto;
  letter-spacing: 0px;
  color: #878787;
  padding: 0;
  margin: 0;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding-top: 5px;
  padding-bottom: 10px;
`;

export const BookPriceDis = styled.p`
  /* font: normal normal medium 30px/39px Roboto; */
  font: normal normal normal 30px/39px Roboto;
  font-weight: medium;
  letter-spacing: 0px;
  color: #0a0102;
  margin: 0;
  padding: 0;
`;

export const BookPrice = styled.p`
  text-decoration: line-through;
  font: normal normal normal 15px/20px Roboto;
  letter-spacing: 0px;
  color: #878787;
  margin: 0;
  padding: 0;
`;

export const BookDetailContainer = styled.div`
  display: flex;
  padding: 30px 0;
  flex-direction: column;
  gap: 5px;
  border-bottom: 1px solid grey;
  border-top: 1px solid grey;
`;

export const BookDetailTitle = styled.p`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 2px;
  font: normal normal normal 15px/20px Roboto;
  letter-spacing: 0px;
  color: #878787;
`;

export const BookDetail = styled.p`
  margin: 0;
  padding: 0;
  display: flex;
  font: normal normal normal 12px/16px Roboto;
  letter-spacing: 0px;
  color: #373434;
`;

export const CustomerFeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

export const FeedbackTitle = styled.h2`
  margin: 0;
  padding: 0;
  font: normal normal normal 18px/24px Roboto;
  letter-spacing: 0px;
  color: #0a0102;
`;

export const FeedbackFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  background-color: #f5f5f5;
  padding: 15px;
  gap: 8px;
  border-radius: 2px;
`;

export const FeedbackFormTag = styled.p`
  margin: 0;
  padding: 0;
  font: normal normal normal 12px/16px Roboto;
  letter-spacing: 0px;
  color: #0a0102;
`;

export const StarContainer = styled.div`
  display: flex;
  color: #707070;
  font-size: 20px;
`;

export const Star = styled.div`
  cursor: pointer;
`;

export const EmptyStar = styled(StarBorderIcon)``;

export const FIlledStar = styled(StarIcon)`
  color: #ffce00;
`;

export const InputField = styled.textarea``;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const SubmitBtn = styled.button`
  display: flex;
  width: fit-content;
  font: normal normal normal 14px/19px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  background-color: #3371b5;
  border: none;
  padding: 3px 15px;
  border-radius: 2px;
  cursor: pointer;
`;
