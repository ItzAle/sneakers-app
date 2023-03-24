import './ShopPage.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/footer'
import { Link} from 'react-router-dom'
// import AllCategory from '../../components/sneakersCategories/AllCategory/AllCategory'
// import AdultCategory from '../../components/sneakersCategories/adultCategory/adultCategory'
import KidCategory from '../../components/sneakersCategories/kidCategory/kidCategory'

export default function ShopPage() {

  return (
    <>
    <Navbar/>
    <div className='categorySelect'>
      <Link to="/"><p className='options'>All Categories</p></Link>
      <Link to="/"><p className='options'>Adults</p></Link>
      <Link to="/"><p className='options'>Kids</p></Link>
    </div>
    <div className='shopPage'>
      {/* <AllCategory/> */}
      {/* <AdultCategory/> */}
      <KidCategory/>
    </div>
    <Footer/>
    </>
    
  )
}

