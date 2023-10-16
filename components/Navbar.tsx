import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg main-purple' aria-label='Navbar'>
      <div className='container-fluid'>

        <Link href="/" className='d-flex flex-wrap mt-2 gap-2 navbar-brand text-white align-items-center'>
            <i className="bi bi-fire fs-3 mb-2"></i>
            <p className='d-flex text-white fw-bold text-uppercase mt-2'>sample page</p>
        </Link>

        
        <button 
            className='navbar-toggler border-0 justify-content-start'
            type='button'
            data-bs-toggle="collapse"
            data-bs-target="#navbar1"
            aria-controls="navbar1"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
                <span className=''><i className='bi bi-grid text-white'></i></span>
        </button>
        <div className='collapse navbar-collapse' id='navbar1'>
            <ul className='navbar-nav col-lg-4 me-auto mb-2 mb-lg-0 gap-4'>
                <li className='nav-item'>
                    <Link href="#" className='nav-link text-white'>
                        Home
                    </Link>
                </li>
                <li className='nav-item dropdown'>
                    <Link href="#" className='nav-link dropdown-toggle text-white' role='button' id='drop-01' data-bs-toggle="dropdown">
                        Features
                    </Link>
                    <ul className='dropdown-menu' aria-labelledby='drop-01'>
                        <li className='dropdown-item'>
                            <Link href="#" className='dropdown-item'>
                                Freature 01
                            </Link>
                        </li>
                        <li className='dropdown-item'>
                            <Link href="#">
                                Freature 02
                            </Link>
                        </li>
                        <li className='dropdown-item'>
                            <Link href="#">
                                Freature 03
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className='nav-item dropdown'>
                    <Link href="#" className='nav-link dropdown-toggle text-white' data-bs-toggle="dropdown">
                        More
                    </Link>
                    <ul className='dropdown-menu'>
                        <li className='dropdown-item'>
                            <Link href="#">
                                More 01
                            </Link>
                        </li>
                        <li className='dropdown-item'>
                            <Link href="#" >
                                More 02
                            </Link>
                        </li>
                        <li className='dropdown-item'>
                            <Link href="#" >
                                More 03
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
            <form role='search' className='input-group justify-content-lg-center deep-purple rounded'>
                <input id="search-bar"type="search" className='form-control form-control-lg border-0 text-white' placeholder='Enter your search here...' aria-label="Search"/>
                <span className='input-group-text border-0'><i className='bi bi-search border-0'></i></span>
            </form>
            <div className='d-flex col-lg-3 justify-content-lg-end'>
                <button className='btn btn-lg btn-1 text-white fs-6'>Login</button>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
