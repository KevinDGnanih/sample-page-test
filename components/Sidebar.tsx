import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div id='sidebar' className='d-flex ms-1 pt-3 flex-column flex-shrink-0 bg-white sticky-aticky-top shadow-sm'>
      <div className=''></div>
      <ul className='nav nav-pills nav-flush flex-column mb-auto text-center'>
        <li className='nav-item'>
          <Link 
            href="#"
            className='nav-link hover-side active p-3 m-1 shadow rounded-4'
            aria-current="page"
            data-bs-toggle="tooltip"
            title=''
            data-bs-placement="right"
            aria-label='Home'
            data-bs-original-title='Home'
            >
              <i className="bi bi-laptop fs-4"></i>
          </Link>
        </li>
        <li className='nav-item'>
          <Link 
            href="#"
            className='nav-link py-3 m-1 rounded-0'
            aria-current="page"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label='Home'
            data-bs-original-title='Home'
            >
              <i className="hover-side bi bi-person fs-4 text-body-tertiary"></i>
          </Link>
        </li>
        <li className='nav-item'>
          <Link 
            href="#"
            className='nav-link py-3 hover-side  rounded-0'
            aria-current="page"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label='Home'
            data-bs-original-title='Home'
            >
              <i className="bi bi-people-fill hover-side fs-4 text-body-tertiary"></i>
          </Link>
        </li>
        <li className='nav-item'>
          <Link 
            href="#"
            className='nav-link py-3 rounded-0'
            aria-current="page"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label='Home'
            data-bs-original-title='Home'
            >
              <i className="bi bi-award fs-4 text-body-tertiary"></i>
          </Link>
        </li>
        <li className='nav-item'>
          <Link 
            href="#"
            className='nav-link py-3 rounded-0'
            aria-current="page"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label='Home'
            data-bs-original-title='Home'
            >
              <i className="bi bi-star fs-4 text-body-tertiary"></i>
          </Link>
        </li>
        <li className='nav-item'>
          <Link 
            href="#"
            className='nav-link py-3 rounded-0'
            aria-current="page"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label='Home'
            data-bs-original-title='Home'
            >
              <i className="bi bi-inboxes fs-4 text-body-tertiary"></i>
          </Link>
        </li>
        <li className='nav-item'>
          <Link 
            href="#"
            className='nav-link py-3 rounded-0'
            aria-current="page"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label='Home'
            data-bs-original-title='Home'
            >
              <i className="bi bi-gem fs-4 text-body-tertiary"></i>
          </Link>
        </li>
        <li className='nav-item'>
          <Link 
            href="#"
            className='nav-link py-3 rounded-0'
            aria-current="page"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label='Home'
            data-bs-original-title='Home'
            >
              <i className="bi bi-window-dock fs-4 text-body-tertiary"></i>
          </Link>
        </li>
        <li className='nav-item'>
          <Link 
            href="#"
            className='nav-link py-3 rounded-0'
            aria-current="page"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label='Home'
            data-bs-original-title='Home'
            >
              <i className="bi bi-chat-square-text fs-4 text-body-tertiary"></i>
          </Link>
        </li>
        <li className='nav-item'>
          <Link 
            href="#"
            className='nav-link py-3 rounded-0'
            aria-current="page"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label='Home'
            data-bs-original-title='Home'
            >
              <i className="bi bi-basket3 fs-4 text-body-tertiary"></i>
          </Link>
        </li>
        <li className='nav-item'>
          <Link 
            href="#"
            className='nav-link py-3 rounded-0'
            aria-current="page"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label='Home'
            data-bs-original-title='Home'
            >
              <i className="bi bi-journals fs-4 text-body-tertiary"></i>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
