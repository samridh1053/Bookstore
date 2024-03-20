import React from "react";
import { FooterContainer, FooterOuterContainer } from "../styles/FooterStyles";

function Footer() {
  return (
    <FooterOuterContainer>
      <FooterContainer>
        <p style={{ color: "white" }}>
          Copyright 2020, Bookstore Private Limited. All Rights Reserved
        </p>
      </FooterContainer>
    </FooterOuterContainer>
  );
}
export default Footer;
