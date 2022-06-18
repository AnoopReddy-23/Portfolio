import React from 'react'
import logo from '../images/logo.svg';
import logo1 from '../images/logo1.svg';
import './Landing.css'
function Landing() {
  return (
    <>
      <div className="home__bg">
      <div className="container-fluid">
          <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6" >
              <h2>Bootstrap Responsive Website</h2>
              <p>Bootstrap is a famous front-end framework used to create mobile-first responsive websites. The latest release
                version of bootstrap has removed JQuery dependency not fully work on vanilla javascript.</p>
              <p>Using bootstrap it becomes very easy to build a responsive website.</p>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <img src={logo} className='m-5 img-fluid'/>
            </div>
            
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <img src={logo1} className='m-5 w-75 h-75 img-fluid'/>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6" >
              <h2>Bootstrap Responsive Website</h2>
              <p>Bootstrap is a famous front-end framework used to create mobile-first responsive websites. The latest release
                version of bootstrap has removed JQuery dependency not fully work on vanilla javascript.</p>
              <p>Using bootstrap it becomes very easy to build a responsive website.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing