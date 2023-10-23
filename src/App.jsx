import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import Fundraiser from "./Pages/fundraiser/FundRaiser";
import Donations from "./Pages/donations/Donations";
import How from "./Pages/howpage/HowPage";
import Sign from "./Pages/signin/SignIn";
import CreateFund from "./Pages/createfund/CreateFund";
import Error from "./Pages/notfound/NotFound";
import Navbar from "./Components/navbar";
import OrganizationSignUp from "./Pages/organizationsignup/OrganizationSignUp";
import UserSignUp from "./Pages/usersignup/UserSignUp";
import LoginNavbar from "./Components/LoginNavbar";
import FirstDonation from "./Pages/feed/FirstDonation";
import FundraiserProfile from "./Pages/fundraiserProfile/FundraiserProfile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="fundraiser"
          element={
            <>
              <Navbar />
              <Fundraiser />
            </>
          }
        />
        <Route
          path="feed"
          element={
            <>
              <Navbar />
              <FirstDonation />
            </>
          }
        />
        <Route
          path="donations/:id"
          element={
            <>
              <Navbar />
              <Donations />
            </>
          }
        />
        <Route
          path="fundraiserprofile/:id"
          element={
            <>
              <LoginNavbar />
              <FundraiserProfile />
            </>
          }
        />
        <Route
          path="howpage"
          element={
            <>
              <Navbar />
              <How />
            </>
          }
        />
        <Route path="signin" element={<Sign />} />
        <Route path="organizationsignup" element={<OrganizationSignUp />} />
        <Route path="usersignup" element={<UserSignUp />} />
        <Route
          path="createfund"
          element={
            <>
              {" "}
              <Navbar />
              <CreateFund />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Error />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
