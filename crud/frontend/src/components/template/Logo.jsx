import './Logo.css'
import React from 'react'
import logo from '../../assets/imgs/logo.png';
import { Link } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
  <aside className='logo'>
    <Link className='logo' to='/'>
      <img src={logo} alt='logo' />
    </Link>
  </aside>