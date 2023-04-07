import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className=' footer' >
      <div className="container">
        <div className="row ">
          <div className="col">
            <NavLink to='/cv_build' ><p className='footer-text'>CV generator<br /><br /> </p></NavLink>
            <NavLink to='/cv_template'><p className='footer-text'>CV templates<br /><br /> </p></NavLink>
            <NavLink to='cv_examples'><p className='footer-text'>CV formatting<br /><br /> </p></NavLink>
            <NavLink to='/'><p className='footer-text'>Resources<br /><br /> </p></NavLink>
            <NavLink to='/'><p className='footer-text'>Resume writing guide </p></NavLink>
          </div>
          <div className="col">
            <p className='footer-text'>Conatct us <br /><br /> </p>
            <p className='footer-text'>Privacy Policy<br /><br /> </p>
            <p className='footer-text'>Terms and conditons<br /><br /><br /><br /><br /><br /> </p><hr />
            <p className='footer-text'>&copy; Shriya Softwares , All right reserved 2022 </p>
          </div>
          <div className="col">
            <p className='footer-text'>428/322 Attarsuiya Near Gol Park Prayagraj Uttar Pradesh<br /><br /> </p>
            <p className='footer-text'>Email: shriyapurwar@gmail.com </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer