import { BrowserRouter,Routes, Route } from 'react-router-dom'

import React from 'react'
import Home from './Pages/home/Home'
import Fundraiser from './Pages/fundraiser/FundRaiser'
import Donations from './Pages/donations/Donations'
import How from './Pages/howpage/HowPage'
import Sign from './Pages/signin/SignIn'
import CreateFund from './Pages/createfund/CreateFund'
import Error from './Pages/notfound/NotFound'
import Navbar from './Components/navbar'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element= {<Home/>}/>
        <Route path='fundraiser' element= {<Fundraiser/>}/>
        <Route path='donations' element= {<Donations/>}/>
        <Route path='howpage' element= {<How/>}/>
        <Route path='signin' element= {<Sign/>}/>
        <Route path='createfund' element= {<CreateFund/>}/>
        <Route path='*' element= {<Error/>}/>
      </Routes>
      {/* <Home />
      <Fundraiser />
      <Donations />
      <How/>
      <Signin />
      <CreateFund />
      <Error /> */}
    </BrowserRouter>
  )
}

export default App