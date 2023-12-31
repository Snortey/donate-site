import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import Fundraiser from "./Pages/fundraiser/FundRaiser";
import Donations from "./Pages/donations/Donations";
import How from "./Pages/howpage/HowPage";
import Sign from "./Pages/signin/SignIn";
import Error from "./Pages/notfound/NotFound";
import Navbar from "./Components/navbar";
import OrganizationSignUp from "./Pages/organizationsignup/OrganizationSignUp";
import UserSignUp from "./Pages/usersignup/UserSignUp";
import LoginNavbar from "./Components/LoginNavbar";
import FirstDonation from "./Pages/feed/FirstDonation";
import FundraiserProfile from "./Pages/fundraiserProfile/FundraiserProfile";
import PostFundraiser from "./Pages/postfundraiser/PostFundraiser";
import CreateFundIndividuals from "./Pages/createAfund/createindividual/CreateIndividuals";
import CreateFundOrganizations from "./Pages/createAfund/createorganization/CreateOrganizations";
import UploadPic from "./Pages/createAfund/upload/UploadPic";
import CreateDescription from "./Pages/createAfund/createdescription/CreateDescription";
import CreateReview from "./Pages/createAfund/review/CreateReview";
import SetLocation from "./Pages/setlocation/SetLocation";
import PaymentOrganization from "./Pages/paymentMethodOrganization/PaymentOrganization";

// import { AuthProvider } from "./Components/Authentication/AuthContext";
// import { AuthRenderer } from "./Components/Authentication/AuthRenderer";

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
          path="postfundraiser"
          element={
            <>
              <LoginNavbar />
              <PostFundraiser />
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
        <Route path="createindividuals" element={<CreateFundIndividuals />} />
        <Route
          path="createorganizations"
          element={<CreateFundOrganizations />}
        />
        <Route path="uploadpic" element={<UploadPic />} />
        <Route path="createdescriptions" element={<CreateDescription />} />
        <Route path="reviews" element={<CreateReview />} />
        <Route path="locations" element={<SetLocation />} />
        <Route path="paymentsorganization" element={<PaymentOrganization />} />

        {/* <Route path="createfundindividual" element={<CreateFundIndividual />} /> */}

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
