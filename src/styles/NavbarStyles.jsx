import styled from "styled-components";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: #a03037;
  position: fixed;
  top: 0;
  left: 0;
`;

export const NavbarIncontainer = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarLogoConatiner = styled.a`
  display: flex;
  font: normal normal normal 20px/26px Roboto;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  text-decoration: none;
  color: white;
  padding: 0 10px;
`;

export const NavbarLogo = styled.img`
  width: 31px;
  height: 23px;
`;

export const NavBarRightContainer = styled.div`
  display: flex;
`;

export const NavBarMiddleContainer = styled.div`
  display: flex;
`;

export const NavSearch = styled.div`
  display: flex;
`;

export const NavSearchIcon = styled(SearchIcon)`
  height: 10px;
  width: 10px;
`;

export const NavSearchInput = styled.input`
  font-size: 13px;
  width: 400px;
  border: 1px solid white;
  &:focus {
    outline: none;
  }
`;

export const NavSearchBar = styled.div`
  display: flex;
  max-width: 500px;
  color: #9d9d9d;
  background-color: white;
  height: 33px;
  border-radius: 2px;
  border: none;
  padding: 0px 13px;
  align-items: center;
`;

export const NavProfile = styled.a`
  display: flex;
  width: 100px;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  border-left: 0.5px solid #666666;
  border-right: 0.5px solid #666666;
  text-decoration: none;
  color: white;
  position: relative;
`;

export const ProfileLogo = styled(PersonOutlineOutlinedIcon)`
  width: 15px;
  height: 15px;
`;

export const NameTag = styled.p`
  font: normal normal normal 10px/13px Roboto;
  padding: 0;
  margin: 0;
`;

export const NavCart = styled.a`
  display: flex;
  width: 100px;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  border-right: 0.5px solid #666666;
  text-decoration: none;
  color: white;
`;

export const CartLogo = styled(ShoppingCartOutlinedIcon)`
  width: 15px;
  height: 15px;
`;

export const ProfilePopUp = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 110%;
  right: 0;
  background-color: white;
  padding: 16px 26px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: default;
  gap: 16px;
`;

export const Title = styled.p`
  font: normal normal medium 12px/16px Roboto;
  margin: 0;
  color: #0a0102;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  font: normal normal normal 12px/16px Roboto;
  color: #878787;
  gap: 10px;
  cursor: pointer;
`;

export const ProfileLogo2 = styled(PersonOutlineOutlinedIcon)`
  color: #878787;
`;

export const LogoutBtn = styled.button`
  max-width: 123px;
  padding: 9px 0;
  background-color: white;
  border: 1px solid #a03037;
  color: #a03037;
  cursor: pointer;
`;
