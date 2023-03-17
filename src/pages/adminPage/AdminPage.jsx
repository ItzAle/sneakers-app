import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import AdminMenu from "../../components/adminMenu/AdminMenu"
import Footer from '../../components/footer/footer'
import AddForm from '../../components/addForm/AddForm'

function adminPage() {
  return (
    <>
        <Navbar/>
        <AddForm/>
        <AdminMenu/>
        <Footer/>
    </>
  )
}

export default adminPage
