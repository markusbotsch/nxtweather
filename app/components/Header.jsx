import React from 'react';
import Link from 'next/link';


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
                <input type="text" placeholder="Stadt suchen" />
                <nav>
                    <Link href="/about">About</Link>
                </nav>
            </div>
            
        </div>
        
    </header>
  )
}

export default Header