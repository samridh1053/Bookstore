import React, { useEffect, useState } from "react";
import {
  CartLogo,
  Link,
  LogoutBtn,
  NameTag,
  NavBarRightContainer,
  NavCart,
  NavProfile,
  NavbarContainer,
  NavbarIncontainer,
  NavbarLogo,
  NavBarMiddleContainer,
  NavSearchBar,
  NavbarLogoConatiner,
  ProfileLogo,
  ProfileLogo2,
  ProfilePopUp,
  Title,
  NavSearchIcon,
  NavSearchInput,
  CartPop,
} from "../styles/NavbarStyles";
import MarkunreadMailboxOutlinedIcon from "@mui/icons-material/MarkunreadMailboxOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useNavigate } from "react-router-dom";
import { getCartItem } from "../services/CartServices";

// import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [cartList, setCartList] = useState([]);
  const handleClick = () => {
    setOpen(!open);
    console.log("clicked");
  };
  const getCart = async () => {
    const cartItem = await getCartItem();
    setCartList(cartItem?.result);
  };
  const navigate = useNavigate();
  const handleChange = () => {
    navigate("/");
    window.localStorage.removeItem("token");
  };

  useEffect(() => {
    getCart();
    console.log(cartList);
  }, [cartList.length || cartList[0]?.product_id.bookName || cartList]);

  return (
    <NavbarContainer>
      <NavbarIncontainer>
        <NavbarLogoConatiner href="/">
          <NavbarLogo src={require("../assests/education.png")} />
          Bookstore
        </NavbarLogoConatiner>
        <NavBarMiddleContainer>
          <NavSearchBar>
            <NavSearchIcon sx={{ fontSize: 16 }} />

            <NavSearchInput
              type="text"
              placeholder="Search..."
              name="search"
            ></NavSearchInput>
          </NavSearchBar>
        </NavBarMiddleContainer>
        <NavBarRightContainer>
          <NavProfile onClick={handleClick}>
            <ProfileLogo />
            <NameTag>Samridh</NameTag>
            <ProfilePopUp style={{ display: open ? "flex" : "none" }}>
              <Title>Hello Samridh</Title>
              <Link>
                <ProfileLogo2 sx={{ fontSize: 16 }} />
                Profile
              </Link>
              <Link>
                <MarkunreadMailboxOutlinedIcon sx={{ fontSize: 16 }} />
                My Orders
              </Link>
              <Link>
                <FavoriteBorderOutlinedIcon sx={{ fontSize: 16 }} />
                My Wishlist
              </Link>
              <LogoutBtn onClick={handleChange}>Logout</LogoutBtn>
            </ProfilePopUp>
          </NavProfile>
          <NavCart href="/cart">
            {cartList.length > 0 ? <CartPop>{cartList.length}</CartPop> : <></>}
            <CartLogo />
            <NameTag>Cart</NameTag>
          </NavCart>
        </NavBarRightContainer>
      </NavbarIncontainer>
    </NavbarContainer>
  );
};

export default Navbar;
