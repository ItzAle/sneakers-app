import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import AdminMenu from "../../components/adminMenu/AdminMenu"
import Footer from '../../components/footer/footer'

function adminPage() {
  return (
    <>
        <Navbar/>
        <AdminMenu/>
        <Footer/>
    </>
  )
}

export default adminPage
