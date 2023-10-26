import React from 'react'
import Nav from '../component/Nav'
import {useNavigate} from 'react-router-dom'
import Footer from '../shared/Footer';
import homelogo from '../assets/homelogo.svg';

function Home() {
  let navigate=useNavigate();
  return (
    <div className='parentContainer'>
      {/* <Nav></Nav> */}
      <main >
      <div className='homeMain'>
      <div className='welcomeMessage'>
      <h4>Welcome to Github </h4><h4 className="Finder"> Finder</h4>
      </div>
      <p>Find users and repositories on Github with ease</p>
      
      
      <img style={{margin:'10px',width:'250px'}} src={homelogo} alt='home page center logo'></img>
      
      <div className='mainButtons'>
      <button className='homeUserButton' onClick={()=>navigate('/user')}>Search Users</button>
      <button className='homeRepositoryButton' onClick={()=>navigate('/repositories')}>Search Repositories</button>
      </div>
      </div>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Home