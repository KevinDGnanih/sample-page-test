import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='d-flex p-3 flex-column flex-sm-row justify-content-between py-4 my-4 border-top'>
        <p>© 2023 Sample Page. All rights reserved.</p>
        <ul className='list-unstyled d-flex'>
            <li className='ms-3'>
                <Link href="#" className='link-body-emphasis'>
                    <i className="bi bi-twitter-x"></i>
                </Link>
            </li>
            <li className='ms-3'>
                <Link href="#" className='link-body-emphasis'>
                    <i className="bi bi-facebook"></i>
                </Link>
            </li>
            <li className='ms-3'>
                <Link href="#" className='link-body-emphasis'>
                    <i className="bi bi-instagram"></i>
                </Link>
            </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
