import React from 'react';
import './compoStyling.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
        <div className='headtextparent'>

        <h1 className='ttext'>The </h1>
        <h1 className='sirentext'> Siren</h1>
        </div>

        <div className='headerparent'>
            <ul type="none" className='headerchild'>
                <li> <Link to='./home' className='headerlist'> Home </Link></li>
                <li><Link to='./bollywood' className='headerlist'> Bollywood </Link></li>
                <li><Link to='./technology' className='headerlist'>Technology </Link></li>
                <li><Link to='./hollywood' className='headerlist'>Hollywood </Link></li>
                <li><Link to='./fitness' className='headerlist'>Fitness </Link> </li>
                <li><Link to='./food' className='headerlist'> Food </Link></li>
            </ul>
            
        </div>
        {/* <hr></hr> */}
        </>
    )
}

export default Header
