import React from 'react'
import logo from '../../assets/svg/logo.svg'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer bg-white">
      <nav className="bottom-nav flex flex-col md:flex-row md:gap-16 gap-6 align-start wrap md:px-16 md:py-8 px-4 py-3">
        <div className="bottom-nav__col flex-col flex  md:gap-6 gap-4 flex-1 align-start ">
          <img style={{width: '150px'}} src={logo} alt="" />
          <p className="text-justify opacity-90">Our vision is to provide convenience
          <br />
          and help increase your sales business.</p>
        </div>
        <div className="bottom-nav__col flex flex-col  align-start md:gap-6 gap-4">
          <p className="text-dark font-bold fs-xl">About</p>
          <ul className="flex flex-col gap-2 ">
            <li><NavLink to='/'>How it works</NavLink></li>
            <li><NavLink to='/'>Featured</NavLink></li>
            <li><NavLink to='/'>Partnership</NavLink></li>
            <li><NavLink to='/'>Business Relations</NavLink></li>
          </ul>
        </div>
        <div className="bottom-nav__col flex flex-col  align-start md:gap-6 gap-4">
          <p className="text-dark font-bold fs-xl">Community</p>
          <ul className="flex flex-col gap-2">
            <li><NavLink to='/'>Events</NavLink></li>
            <li><NavLink to='/'>Podcast</NavLink></li>
            <li><NavLink to='/'>Blog</NavLink></li>
            <li><NavLink to='/'>Invite a friend</NavLink></li>
          </ul>
        </div>
        <div className="bottom-nav__col flex flex-col  align-start md:gap-6 gap-4">
          <p className="text-dark font-bold fs-xl">Socials</p>
          <ul className="flex flex-col gap-2">
            <li><NavLink to='/'>Discord</NavLink></li>
            <li><NavLink to='/'>Instagram</NavLink></li>
            <li><NavLink to='/'>Twitter</NavLink></li>
            <li><NavLink to='/'>Facebook</NavLink></li>
          </ul>
        </div>
      </nav>
    <div className="legal flex md:flex-row flex-col md:gap-5 gap-3 wrap px-4 p-4 md:p-6">
      <p className="text-dark font-bold flex-1 text-sm md:text-base">©2022 MORENT. All rights reserved</p>
      <a className="text-sm md:text-base">Privacy Policy</a>
      <a className="text-sm md:text-base">Terms and conditions</a>
    </div>
  </footer>
  )
}

export default Footer