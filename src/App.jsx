import { BrowserRouter,Routes, Route } from 'react-router-dom'

import React from 'react'
import Home from './Pages/home/Home'
import Fundraiser from './Pages/fundraiser/FundRaiser'
import Donations from './Pages/donations/Donations'
import How from './Pages/howpage/HowPage'
import Signin from './Pages/signin/SignIn'
import CreateFund from './Pages/createfund/CreateFund'
import Error from './Pages/notfound/NotFound'
import Navbar from './Components/navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home />
      <Fundraiser />
      <Donations />
      <How/>
      <Signin />
      <CreateFund />
      <Error />
    </BrowserRouter>
  )
}

export default App