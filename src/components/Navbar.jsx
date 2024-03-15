import React, { useState } from "react";
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
    NavbarLogoConatiner,
    ProfileLogo,
    ProfileLogo2,
    ProfilePopUp,
    Title,
} from "../styles/NavbarStyles";
import MarkunreadMailboxOutlinedIcon from "@mui/icons-material/MarkunreadMailboxOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
        console.log("clicked");
    };
    return (
        <NavbarContainer>
            <NavbarIncontainer>
                <NavbarLogoConatiner href="/">
                    <NavbarLogo src={require("../assests/education.png")} />
                    Bookstore
                </NavbarLogoConatiner>
                <NavBarRightContainer>
                    <NavProfile onClick={handleClick}>
                        <ProfileLogo />
                        <NameTag>Poonam</NameTag>
                        <ProfilePopUp
                            style={{ display: open ? "flex" : "none" }}
                        >
                            <Title>Hello Poonam</Title>
                            <Link>
                                <ProfileLogo2 sx={{ fontSize: 16 }} />
                                Profile
                            </Link>
                            <Link>
                                <MarkunreadMailboxOutlinedIcon
                                    sx={{ fontSize: 16 }}
                                />
                                My Orders
                            </Link>
                            <Link>
                                <FavoriteBorderOutlinedIcon
                                    sx={{ fontSize: 16 }}
                                />
                                My Wishlist
                            </Link>
                            <LogoutBtn>Logout</LogoutBtn>
                        </ProfilePopUp>
                    </NavProfile>
                    <NavCart href="/cart">
                        <CartLogo />
                        <NameTag>Cart</NameTag>
                    </NavCart>
                </NavBarRightContainer>
            </NavbarIncontainer>
        </NavbarContainer>
    );
};

export default Navbar;
