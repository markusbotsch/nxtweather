import React from 'react';
import Link from 'next/link';
import Search from './search';

const Header = () => {
  return (
    <header className='header'>
        <div className="container">
            <div>
                <Link href="/">
                    <h1 className='logo'>Nxt.Weather</h1>
                </Link>
            </div>
            <div className="navigation">
                <Search />
                <nav>
                    <Link href="/about">About</Link>
                </nav>
            </div>
            
        </div>
        
    </header>
  )
}

export default Header