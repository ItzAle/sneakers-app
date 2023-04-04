import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/footer'
import "./Error404.css"

function Error404() {
  return (
      <>
          <Navbar />
          <div id="main">
              <div className="fof">
                  <h1>Error 404</h1><br />
                  <h2>Page Not Found</h2>
              </div>
          </div>
          <Footer />
      </>
  )
}

export default Error404
