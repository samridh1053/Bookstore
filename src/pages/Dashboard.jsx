import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { getBooks } from "../services/GetBooks";
import {
  BookAuthor,
  BookPrice,
  BookPriceDis,
  BookRating,
  BookRatingcontainer,
  BookTitle,
  Card,
  CardBottomContainer,
  CardContainer,
  CardImg,
  CardImgContainer,
  DashboardContianer,
  DashboardOuterContainer,
  DashboardTag,
  DashboardTitle,
  PriceContainer,
  RatingNumber,
  TitleContainer,
} from "../styles/DashboardStyles";
import StarIcon from "@mui/icons-material/Star";

const Dashboard = () => {
  const [booksList, setBooksList] = useState([]);
  async function getBookList() {
    const books = await getBooks();
    setBooksList(books?.result);
    // console.log(booksList);
  }
  useEffect(() => {
    getBookList();
  }, []);
  return (
    <div>
      <Navbar />
      <DashboardOuterContainer>
        <DashboardContianer>
          <TitleContainer>
            <DashboardTitle>Books</DashboardTitle>
            <DashboardTag>{`(${booksList?.length} items)`}</DashboardTag>
          </TitleContainer>
          <CardContainer>
            {booksList?.map((ele) => (
              <Card key={ele._id} href={`/book/${ele._id}`}>
                <CardImgContainer>
                  <CardImg
                    src={require("../assests/Image 11.png")}
                    alt={ele.bookName}
                  />
                </CardImgContainer>
                <CardBottomContainer>
                  <BookTitle>{ele.bookName}</BookTitle>
                  <BookAuthor>{ele.author}</BookAuthor>
                  <BookRatingcontainer>
                    <BookRating>
                      4.5
                      <StarIcon sx={{ fontSize: 10 }} />
                    </BookRating>
                    <RatingNumber>(20)</RatingNumber>
                  </BookRatingcontainer>
                  <PriceContainer>
                    <BookPriceDis>{`Rs. ${ele.discountPrice}`}</BookPriceDis>
                    <BookPrice>{`Rs. ${ele.price}`}</BookPrice>
                  </PriceContainer>
                </CardBottomContainer>
              </Card>
            ))}
          </CardContainer>
        </DashboardContianer>
      </DashboardOuterContainer>
    </div>
  );
};

export default Dashboard;
