import React from "react";
import Navbar from "../components/Navbar";
import {
  CardImage4,
  CenteredTableContainer,
  ContentContainer,
  HurrayContianer,
  HurrayImageContainer,
  HurrayOuterContainer,
  ShopButton,
  ShopButtonContainer,
  TableCell,
  TableContainer1,
  TableContainer2,
} from "../styles/HurrayStyles";

import Footer from "../components/Footer";

export const Hurray = () => {
  return (
    <div>
      <Navbar />
      <HurrayOuterContainer>
        <HurrayContianer>
          <HurrayImageContainer>
            <CardImage4 src={require("../assests/4.png")} />
            <ContentContainer>
              <p>
                hurray!!! your order is confirmed <br />
                the order id is # 123456 save the order id for <br />
                further communication.
              </p>
            </ContentContainer>
          </HurrayImageContainer>
          <CenteredTableContainer>
            <TableContainer1>
              <TableCell>Email us</TableCell>
              <TableCell>Contact us</TableCell>
              <TableCell>Address</TableCell>
            </TableContainer1>
            <TableContainer2>
              <TableCell>admin@bookstore.com</TableCell>
              <TableCell>+91 8163475881</TableCell>
              <TableCell>
                42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near
                <br /> Kumarakom restaurant, HSR Layout, Bangalore 560034
              </TableCell>
            </TableContainer2>
          </CenteredTableContainer>
          <ShopButtonContainer>
            <ShopButton href="/home">Continue Shopping</ShopButton>
          </ShopButtonContainer>
        </HurrayContianer>
      </HurrayOuterContainer>
      <Footer />
    </div>
  );
};
