import React from 'react'
import amanda from '../../assets/webImg/amandaMconnor.jpg'
import alicia from '../../assets/webImg/aliciaRegis.jpg'
import george from '../../assets/webImg/georgeDavey.jpg'
import charlie from '../../assets/webImg/charlieHull.jpg'
import './GalacticaTeam.css'

function GalacticaTeam() {
  return (
    <div className='galacticaTeam' id='ourTeam'>
      <div className='worker'>
        <p className='workerName bold'>AMANDA MCONNOR</p>
        <img className='workerImg'src={amanda} alt='Amanda Mconnor'/>
        <p className='workerJob bold'>Galactica CEO</p>
        <p className='workerInfo'>Manages and directs the company toward its primary goals and objectives since 2016.</p>
      </div>
      <div className='worker'>
        <p className='workerName bold'>ALICIA REGIS</p>
        <img className='workerImg'src={alicia} alt='Alicia Regis'/>
        <p className='workerJob bold'>Marketing manager</p>
        <p className='workerInfo'>Responsible for overseeing the planning, development and execution of marketing.</p>
      </div>
      <div className='worker'>
        <p className='workerName bold'>GEORGE DAVEY</p>
        <img className='workerImg'src={george} alt='George Davey'/>
        <p className='workerJob bold'>Community manager</p>
        <p className='workerInfo'>Our youngest team member, responsible of the web content and social media of Galactica.</p>
      </div>
      <div className='worker'>
        <p className='workerName bold'>CHARLIE HULL</p>
        <img className='workerImg'src={charlie} alt='Charlie Hull'/>
        <p className='workerJob bold'>Customer support</p>
        <p className='workerInfo'>More than 6 years of experience helping customers with any issue they need.</p>
      </div>
    </div>
  )
}

export default GalacticaTeam
