import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  AuthorTag,
  BookImage,
  BookContianer,
  BookDetail,
  BookDetailContainer,
  BookDetailTitle,
  BookOuterContainer,
  BookPartition,
  BookPrice,
  BookPriceDis,
  BookRating,
  BookRatingcontainer,
  BookTag,
  Breadcrumbs,
  ButtonContainer,
  CustomerFeedbackContainer,
  EmptyStar,
  FIlledStar,
  FeedbackFormContainer,
  FeedbackFormTag,
  FeedbackTitle,
  InputField,
  LeftContainer,
  LinkTag,
  PriceContainer,
  RatingNumber,
  RightContainer,
  SmallBooksContainer,
  SmallBooksContainer1,
  SmallBooksContainer2,
  Star,
  StarContainer,
  SubmitBtn,
  TitleTag,
  CardImage,
  CardImage2,
  CardImage3,
  BtnContainer,
  BookImageContainer,
  AddButton,
  WishButton,
  FavoriteIconContainer,
} from "../styles/BookPageStyles";
import { getBooks } from "../services/GetBooks";
import StarIcon from "@mui/icons-material/Star";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const BookPage = () => {
  let { bookId } = useParams();
  const [booksList, setBooksList] = useState([]);
  const [book, setBook] = useState({});
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(1);
  const [count, setCount] = useState(0);

  const clickArray = [1, 2, 3, 4, 5];

  async function getBookList() {
    const books = await getBooks();
    setBooksList(books?.result);
    getBook();
    // console.log(booksList);
    // await setBook(booksList.filter(filterBook)[0]);
    // console.log(booksList.filter(filterBook)[0]);
  }

  async function getBook() {
    await setBook(booksList.filter(filterBook)[0]);
    // setCounter(2);
  }

  const filterBook = (book) => {
    return book._id === bookId;
  };

  const handleClick = (num) => {
    setNumber(num);
    console.log(num);
  };

  useEffect(() => {
    getBookList();
  }, [book?.bookName || book]);

  return (
    <div>
      <Navbar />
      <BookOuterContainer>
        <BookContianer>
          <Breadcrumbs>
            <LinkTag href="/home">Home /</LinkTag>
            <BookTag>Book</BookTag>
          </Breadcrumbs>
          <BookPartition>
            <LeftContainer>
              <SmallBooksContainer>
                <SmallBooksContainer1>
                  <CardImage src={require("../assests/Image 11.png")} />
                </SmallBooksContainer1>
                <SmallBooksContainer2>
                  <CardImage2 src={require("../assests/3.png")} />
                </SmallBooksContainer2>
              </SmallBooksContainer>
              <BookImageContainer>
                <BookImage>
                  <CardImage3 src={require("../assests/2.png")} />
                </BookImage>
                <BtnContainer>
                  <AddButton> ADD TO BAG</AddButton>
                  <WishButton>
                    <FavoriteIconContainer />
                    WISHLIST
                  </WishButton>
                </BtnContainer>
              </BookImageContainer>
            </LeftContainer>
            <RightContainer>
              <TitleTag>{book?.bookName}</TitleTag>
              <AuthorTag>{book?.author}</AuthorTag>
              <BookRatingcontainer>
                <BookRating>
                  4.5
                  <StarIcon sx={{ fontSize: 14 }} />
                </BookRating>
                <RatingNumber>(20)</RatingNumber>
              </BookRatingcontainer>
              <PriceContainer>
                <BookPriceDis>{`Rs. ${book?.discountPrice}`}</BookPriceDis>
                <BookPrice>{`Rs. ${book?.price}`}</BookPrice>
              </PriceContainer>
              <BookDetailContainer>
                <BookDetailTitle>
                  <FiberManualRecordIcon sx={{ fontSize: 12 }} /> Book Detail
                </BookDetailTitle>
                {/* <BookDetail>{book?.description}</BookDetail> */}
                <BookDetail>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  accusamus et neque! Molestiae rerum necessitatibus magnam quo
                  excepturi omnis fugit obcaecati autem unde consequatur
                  quisquam nulla molestias, sunt, qui accusantium.
                </BookDetail>
              </BookDetailContainer>
              <CustomerFeedbackContainer>
                <FeedbackTitle>Customer Feedback</FeedbackTitle>
                <FeedbackFormContainer>
                  <FeedbackFormTag>Overall Rating</FeedbackFormTag>
                  <StarContainer>
                    <Star onClick={() => handleClick(1)}>
                      {1 > number ? <EmptyStar /> : <FIlledStar />}
                    </Star>
                    <Star onClick={() => handleClick(2)}>
                      {2 > number ? <EmptyStar /> : <FIlledStar />}
                    </Star>
                    <Star onClick={() => handleClick(3)}>
                      {3 > number ? <EmptyStar /> : <FIlledStar />}
                    </Star>
                    <Star onClick={() => handleClick(4)}>
                      {4 > number ? <EmptyStar /> : <FIlledStar />}
                    </Star>
                    <Star onClick={() => handleClick(5)}>
                      {5 > number ? <EmptyStar /> : <FIlledStar />}
                    </Star>
                  </StarContainer>
                  <InputField />
                  <ButtonContainer>
                    <SubmitBtn>Submit</SubmitBtn>
                  </ButtonContainer>
                </FeedbackFormContainer>
              </CustomerFeedbackContainer>
            </RightContainer>
          </BookPartition>
          {/* Book ({book?.bookName}) */}
        </BookContianer>
      </BookOuterContainer>
    </div>
  );
};

export default BookPage;