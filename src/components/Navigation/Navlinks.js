import React, { Component } from 'react';
import { Link } from 'react-router-dom'


const Navlinks = () =>{

    return (
      <div>
         <ul className = 'nav-links'>
              <li><Link to='/Home' className='link'>What we do</Link></li>
              <li><Link to='/about' className='link'>Who we are</Link></li>
              <li><Link to='/impact'className='link'>Products & Services</Link></li>
              <li><Link to='/resources'className='link'>Our Resources</Link></li>
              <li><Link to='contacts'className='link'>Talk to us</Link></li>
          </ul>
      </div>
    );
}

export default Navlinks