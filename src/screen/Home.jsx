import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import SubHeader from '../component/SubHeader'
import Profile from './Profile'

const home = () => {
  return (
    <div>
         <div classNameName="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
        <div classNameName="layout-container">
      <Header></Header>
      <SubHeader></SubHeader>
   
  
      </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default home
