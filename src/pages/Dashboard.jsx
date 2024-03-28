import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
  SortContainer,
  SortSetting,
  SortUnderContainer,
  TitleContainer,
  TopContainer,
} from "../styles/DashboardStyles";
import StarIcon from "@mui/icons-material/Star";
import Footer from "../components/Footer";

const Dashboard = () => {
  const [booksList, setBooksList] = useState([]);
  const [open, setOpen] = useState(false);
  const [sortNum, setSortNum] = useState(0);

  const MyArray = [
    {
      key: "Relevance",
    },
    {
      key: "Price : High to Low",
    },
    {
      key: "Price : Low to High",
    },
  ];
  async function getBookList() {
    const books = await getBooks();
    setBooksList(books?.result);
  }

  const handleSort = (num) => {
    setSortNum(num);
    if (num === 2) {
      const newBookList = booksList.sort((a, b) => {
        return a.discountPrice - b.discountPrice;
      });
      console.log(newBookList);
    }
    if (num === 1) {
      const newBookList = booksList.sort((a, b) => {
        return b.discountPrice - a.discountPrice;
      });
      console.log(newBookList);
    }
  };

  useEffect(() => {
    getBookList();
  }, []);
  return (
    <div>
      <Navbar />
      <DashboardOuterContainer>
        <DashboardContianer>
          <TopContainer>
            <TitleContainer>
              <DashboardTitle>Books</DashboardTitle>
              <DashboardTag>{`(${booksList?.length} items)`}</DashboardTag>
            </TitleContainer>
            <SortContainer
              onClick={() => {
                setOpen(!open);
              }}
            >
              Sort by {MyArray[sortNum]?.key}{" "}
              <KeyboardArrowDownIcon sx={{ fontSize: 16 }} />
              <SortUnderContainer style={{ display: open ? "flex" : "none" }}>
                <SortSetting
                  onClick={() => {
                    handleSort(1);
                  }}
                >
                  Price High to Low
                </SortSetting>
                <SortSetting
                  onClick={() => {
                    handleSort(2);
                  }}
                >
                  Price Low to High
                </SortSetting>
              </SortUnderContainer>
            </SortContainer>
          </TopContainer>
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
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
