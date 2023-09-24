import React from 'react'
import './Home.css'
import MainHeader from '../../Components/MainHeader'
import MainHowToDonate from '../../Components/MainHowToDonate'
import FeaturedDonation from '../../Components/FeaturedDonation'
import BecomePartner from '../../Components/BecomePartner'
import Inspired from '../../Components/Inspired'
import HomeFooter from '../../Components/HomeFooter'

const Home = () => {
  return (
    <>
      <MainHeader/>
      <MainHowToDonate/>
      <FeaturedDonation/>
      <BecomePartner/>
      <Inspired/>
      <HomeFooter/>
    </>
  )
}

export default Home