import * as React from "react";
import "./signup.css";
import images from "../assests/1.png";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

function Signup() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="main-container">
        <div className="container1">
          <div className="online">
            <img className="round-image" src={images} id="png" />
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
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="LOGIN" value="1" />
                  <Tab label="SIGNUP" value="2" />
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
                  <button type="button" id="bto2">
                    Log In
                  </button>
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div className="bl">
                  <div className="bl11">
                    <label> Full Name</label>
                    <input type="text" id="bl1" />
                  </div>
                  <div className="bl22">
                    <label> Email Id</label>
                    <input type="text" id="bl2" />
                  </div>
                  <div className="bl33">
                    <label> Password</label>
                    <input type="text" id="bl3" />
                  </div>
                  <div className="bl44">
                    <label> Mobile Number</label>
                    <input type="text" id="bl4" />
                  </div>
                  <div className="block2"></div>
                </div>
                <div className="bto">
                  <button type="button" id="bto1">
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
