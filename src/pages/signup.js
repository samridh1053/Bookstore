import * as React from "react";
import { useState } from "react";
import "./signup.css";
import images from "../assests/1.png";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { signupUser, loginUser } from "../services/UserService";
import TabPanel from "@mui/lab/TabPanel";

function Signup() {
  const userDetails = {
    fullName: "",
    email: "",
    password: "",
    phone: "",
  };
  const [value, setValue] = useState("1");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFullName(name);
  };

  const validatePassword = (password) => {
    const regex = /^.{8,}$/;
    return regex.test(password);
  };

  const validatePhoneNumber = (phone) => {
    const regex = /^\d{10}$/;
    return regex.test(phone);
  };

  const validateFullName = (fullName) => {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(fullName);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSignup = async () => {
    setFullNameError("");
    setEmailError("");
    setPasswordError("");
    setPhoneError("");

    let isValid = true;
    if (!validateFullName(fullName)) {
      setFullNameError("Please enter a valid full name");
      isValid = false;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }
    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 8 characters long");
      isValid = false;
    }
    if (!validatePhoneNumber(phone)) {
      setPhoneError("Please enter a valid phone number");
      isValid = false;
    }

    if (isValid) {
      try {
        userDetails.email = email;
        userDetails.fullName = fullName;
        userDetails.password = password;
        userDetails.phone = phone;

        await signupUser({ fullName, email, password, phone });
      } catch (error) {
        console.error("Signup or login failed:", error);
      }
    }
  };

  const handleLogin = async () => {
    setEmailError("");
    setPasswordError("");

    let isValid = true;
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }
    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 8 characters long");
      isValid = false;
    }

    if (isValid) {
      try {
        userDetails.email = email;
        userDetails.password = password;
        await loginUser({ email, password });
      } catch (error) {
        console.error("Signup or login failed:", error);
      }
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="container1">
          <div className="online">
            <img className="round-image" src={images} id="png" alt="" />
          </div>
          <div className="text">
            <b>Online Book Shopping</b>
          </div>
        </div>
        <div className="container2">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  className="tab"
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab
                    label="LOGIN"
                    value="1"
                    id="tab1"
                    style={{ width: "18vw" }}
                  />
                  <Tab
                    label="SIGNUP"
                    value="2"
                    id="tab2"
                    style={{ width: "18vw" }}
                  />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="blok">
                  <div className="blok1">
                    <label> Email Id</label>
                    <input type="text" id="blok11" />
                  </div>
                  <div className="blok2">
                    <label> Password</label>
                    <input type="text" id="blok22" />
                  </div>
                </div>
                <div className="btto">
                  <button
                    type="button"
                    id="bto2"
                    onClick={handleLogin}
                    onSubmit={(e) => e.preventDefault()}
                  >
                    Log In
                  </button>
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div className="bl">
                  <div className="bl11">
                    <label> Full Name</label>
                    <input
                      type="text"
                      id="bl1"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    {fullNameError && (
                      <div className="error">{fullNameError}</div>
                    )}
                  </div>
                  <div className="bl22">
                    <label> Email Id</label>
                    <input
                      type="text"
                      id="bl2"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <div className="error">{emailError}</div>}
                  </div>
                  <div className="bl33">
                    <label> Password</label>
                    <input
                      type="text"
                      id="bl3"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && (
                      <div className="error">{passwordError}</div>
                    )}
                  </div>
                  <div className="bl44">
                    <label> Mobile Number</label>
                    <input
                      type="text"
                      id="bl4"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    {phoneError && <div className="error">{phoneError}</div>}
                  </div>
                  <div className="block2"></div>
                </div>
                <div className="bto">
                  <button
                    type="button"
                    id="bto1"
                    onClick={handleSignup}
                    onSubmit={(e) => e.preventDefault()}
                  >
                    Sign Up
                  </button>
                </div>
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </>
  );
}

export default Signup;
