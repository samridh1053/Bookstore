import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
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
  Book2Container,
  DecrementButton,
  IncrementContainer,
  TextContainer,
  IncrementButton,
  FeedBackCard,
  FeedBackLeftContainer,
  RoundContainer,
  FeedBackTextContainer,
  FeedbackStarContainer,
  FeedBackCardTitle,
  FeedbackContent,
} from "../styles/BookPageStyles";
import { getBooks } from "../services/GetBooks";
import StarIcon from "@mui/icons-material/Star";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Footer from "../components/Footer";
import {
  addCartItem,
  getCartItem,
  updateCartItem,
} from "../services/CartServices";

const BookPage = () => {
  let { bookId } = useParams();
  const [booksList, setBooksList] = useState([]);
  const [book, setBook] = useState({});
  const [number, setNumber] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [cartList, setCartList] = useState([]);

  const feedBack = [
    {
      name: "Aniket Chile",
      feedback_content:
        "Good product. Even though the translation could have been better, Chanakya's neeti are thought provoking. Chanakya has written on many different topics and his writings are succinct.",
      rating: 3,
    },
    {
      name: "Shweta Bodkar",
      feedback_content:
        "Good product. Even though the translation could have been better, Chanakya's neeti are thought provoking. Chanakya has written on many different topics and his writings are succinct.",
      rating: 4,
    },
  ];

  async function getBookList() {
    const books = await getBooks();
    setBooksList(books?.result);
    getBook();

    const cartItem = await getCartItem();
    setCartList(cartItem?.result);
    getCart(book?._id);
  }

  async function getBook() {
    await setBook(booksList.filter(filterBook)[0]);
  }
  const getCart = (id) => {
    console.log(id);
    cartList?.map((item) => {
      if (item?.product_id?._id === id) {
        console.log(true);
        setOpen(true);
        // setNumber(item.quantityToBuy);
      }
    });
  };
  const filterBook = (book) => {
    return book._id === bookId;
  };

  const handleClick = (num) => {
    setNumber(num);
    console.log(num);
  };

  const handleAddCart = async () => {
    setOpen(true);
    await addCartItem(book?._id, JSON.stringify(book));
  };

  const handleDecrement = async () => {
    setQuantity(quantity - 1);
    const quantityToBuy = {
      quantityToBuy: quantity,
    };
    await updateCartItem(book?._id, JSON.stringify(quantityToBuy));
  };

  const handleIncrement = async () => {
    setQuantity(quantity + 1);
    const quantityToBuy = {
      quantityToBuy: quantity,
    };
    await updateCartItem(book?._id, JSON.stringify(quantityToBuy));
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
                {/* <Book2Container> */}
                <BookImage>
                  <CardImage3 src={require("../assests/2.png")} />
                </BookImage>
                {/* </Book2Container> */}
                <BtnContainer>
                  {!open ? (
                    <AddButton onClick={handleAddCart}> ADD TO BAG</AddButton>
                  ) : (
                    <IncrementContainer>
                      <DecrementButton onClick={handleDecrement}>
                        -
                      </DecrementButton>
                      <TextContainer>{quantity}</TextContainer>
                      <IncrementButton onClick={handleIncrement}>
                        +
                      </IncrementButton>
                    </IncrementContainer>
                  )}

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
              {feedBack.map((item) => (
                <FeedBackCard>
                  <FeedBackLeftContainer>
                    <RoundContainer>
                      {item.name.split(" ").map((ele) => ele[0])}
                    </RoundContainer>
                  </FeedBackLeftContainer>
                  <FeedBackTextContainer>
                    <FeedBackCardTitle>{item.name}</FeedBackCardTitle>
                    <FeedbackStarContainer>
                      <Star>
                        {1 > item.rating ? <EmptyStar /> : <FIlledStar />}
                      </Star>
                      <Star>
                        {2 > item.rating ? <EmptyStar /> : <FIlledStar />}
                      </Star>
                      <Star>
                        {3 > item.rating ? <EmptyStar /> : <FIlledStar />}
                      </Star>
                      <Star>
                        {4 > item.rating ? <EmptyStar /> : <FIlledStar />}
                      </Star>
                      <Star>
                        {5 > item.rating ? <EmptyStar /> : <FIlledStar />}
                      </Star>
                    </FeedbackStarContainer>
                    <FeedbackContent>{item.feedback_content}</FeedbackContent>
                  </FeedBackTextContainer>
                </FeedBackCard>
              ))}
            </RightContainer>
          </BookPartition>
          {/* Book ({book?.bookName}) */}
        </BookContianer>
      </BookOuterContainer>
      <Footer />
    </div>
  );
};

export default BookPage;
