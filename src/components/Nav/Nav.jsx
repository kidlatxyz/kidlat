import React from 'react';
import kidlatLogo from '../../assets/kidlat-logo.png'

import styles from './Nav.module.css';
//import SomeLogo from 
// <!<svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>

const Nav = () => {

  return (
    <nav className={`flex items-center justify-between flex-wrap bg-teal-500 p-6 ${styles.Nav}`}>
        <div className="flex-shrink-0 text-white pl-2" style={{float:'left', position: 'absolute', top: '-25px'}}>
             <img src={kidlatLogo} className="logo -mt-8" alt="Kidlat" />
        </div>
        <div className="grid-cols-6 w-full block lg:flex lg:items-center lg:w-auto" style={{float: 'right'}}>
        <div className="text-sm lg:flex-grow mt-10">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Tutorials
            </a>
        &nbsp;
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Meetups
            </a>
        </div>
      
        </div>
    </nav>
  );
}

Nav.propTypes = {};

Nav.defaultProps = {};

export default Nav;
