import React from 'react'
import { Outlet } from 'react-router'
import Header from '../layouts/Header/Header'
import Footer from '../layouts/Footer/Footer'

const SiteRoot = () => {
  return (
  <>
  <Header/>
  <Outlet/>
  <Footer/>
  </>
  )
}

export default SiteRoot