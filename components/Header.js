import React from 'react';
import styles from '../styles/Home.module.css';
import Logo from '../assets/tmdb.png';
import Dropdown from 'react-bootstrap/Dropdown';
import Link from 'next/link';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href='/'>
        <img src={Logo.src} alt='tmdb logo'/>
      </Link>

      <Dropdown>
        <Dropdown.Toggle variant='success' id='dropdown-basic'>
          Menu
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href='/'>Home</Dropdown.Item>
          <Dropdown.Item href='/about'>About</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default Header;
