"use client"

import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { memberList, popularGroup } from "@/constant";
import { useState } from 'react';
import PostCard from '@/components/cards/PostCard';


const options = [
{ value: "Everything", label: "Everything" },
{ value: "Newest posts", label: "Newest Posts" },
{ value: "Oldest posts", label: "Oldest Posts" },
];


export default function Home() {

return (

<div className="main-section">
  <div className='container-fluid jutsify-content-center'>
    {/* HERO */}
    <div className='col-lg-12 col-md-10 d-none d-lg-block d-md-block mt-5 bg-banner rounded-4'>
      <div className='banner gradient-bg rounded-4 align-items-center'>
        <div className=''>
          <div className='p-5 ms-5 align-items-center'>
            <h1 className='text-white'>Newsfeed</h1>
            <p className='text-white'>Check what your friends have been up to!</p>
          </div>
        </div>
      </div>
    </div>
    {/* END HERO */}
    <div className='row justify-content-between mt-5'>

      {/* LEFT SIDE COLLUMN */}
      <div className='col-lg-3 col-md-6 d-none d-lg-block'>
        {/* NEWEST MEMBERS */}
        <div className='mb-4 rounded-4 shadow-sm bg-white'>
          <div className='p-2'>
            <p className='fw-bolder m-4'>Newest Members</p>
            {memberList.map((link) => (
            <>
              <div className='d-flex p-4'>
                <Image src={link.imgURL} width={45} height={45} alt='profile picture' className='me-2' />
                <div>
                  <p className='fw-semibold p-0 m-0'>{link.usdName}</p>
                  <Link className='link-react text-body-secondary link-underline at-profile' href="#">
                  {link.profilLink}
                  </Link>
                </div>
              </div>
            </>
            ))}
          </div>
        </div>
        {/* END NEWEST MEMBERS */}

        {/* QUESTS */}
        <div className='mb-4 rounded-4 shadow-sm bg-white'>
          <div className='p-2'>
            <p className='fw-bolder m-4'>QUESTS</p>
            <div className='d-flex p-4'>
              <Image src="/hex-mark.png" width={45} height={45} alt='Quest badge' />
              <div>
                <p className='fw-bolder p-2'>Posting Machine</p>
                <span className=' text-body-secondary'>Posted more than 20 profile activities in one day</span>
              </div>
            </div>
            <hr className='m-3 border border-2 opacity-50' />
          </div>
        </div>

        {/* END QUESTS */}
      </div>
      {/* END LEFT SIDE COLLUMN */}


      {/* CENTER COLLUMN */}
      <div className='col-lg-6 col-md-10'>
        <div className='mb-4 rounded-4 pt-2 shadow-sm bg-white'>
          <div className='d-flex justify-content-between'>
            <p className='border-title fw-bolder mt-3 pt-3 ms-5 mb-0'>All Updates</p>
            <div>
              <div className='ms-4 p-1 label'>Show</div>
              <div className='p-3 dropdown border-0'>
                <Link href="#" className='nav-link dropdown-toggle border p-3 col-12 me-0' role='button' id='drop-03'
                  data-bs-toggle="dropdown">
                Everything<span className='text-white justify-content-end'>dddddd</span>
                </Link>
                <ul className='dropdown-menu rounded-sm' aria-labelledby='drop-03'>
                  <li className='dropdown-item'>
                    <Link href="#" className='link-react'>
                    Freature 01
                    </Link>
                  </li>
                  <li className='dropdown-item'>
                    <Link href="#" className='link-react'>
                    Freature 02
                    </Link>
                  </li>
                  <li className='dropdown-item'>
                    <Link href="#" className='link-react'>
                    Freature 03
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        {/* POST SECTION */}
        <PostCard />
        {/* END POST SECTION */}
      </div>
      {/* END CENTER COLLUMN */}





      {/* RIGHT SIDE COLLUMN */}
      <div className='col-lg-3 col-md-6 d-none d-lg-block'>
        {/* POPULAR GROUPS */}
        <div className='mb-4 fade-in rounded-4 shadow-sm bg-white'>
          <div className='p-2'>
            <p className='fw-bolder m-4'>Popular Groups</p>
            {popularGroup.map((link) => (
            <>
              <div className='d-flex p-4 align-items-center'>
                <Image src={link.imgURL} width={55} height={55} alt='profile picture' className='me-2' />
                <div className='col'>
                  <p className='fw-semibold p-0 m-0'>{link.memberName}</p>
                  <Link className='link-react at-profile text-body-secondary link-underline at-profile' href="#">
                  {link.memberCount}</Link>
                </div>
                <span className='ms-3'><i className="text-grey fs-5 bi bi-globe-americas"></i></span>
              </div>
            </>
            ))}
          </div>
        </div>
        {/* END POPULAR GROUPS */}

        {/* BADGES */}
        <div className='mb-4 rounded-4 shadow-sm bg-white'>
          <div className='p-2'>
            <p className='fw-bolder m-4'>Badges</p>
            <div className='d-flex p-4'>
              <Image className='me-1' src="/globe.png" width={45} height={45} alt='Bagde picture' />
              <div>
                <p className='fw-semibold p-2'>Globe Trotter</p>
                <span className='text-body-secondary'>Has joined at least 10 different groups</span>
              </div>
            </div>

            <hr className='m-3 border border-2 opacity-50' />
          </div>
        </div>
        {/* END BADGES */}
      </div>
      {/* END RIGHT SIDE COLLUMN */}
      {/* LOADING SECTION */}
      <div className='mb-5'>
        <div className='mt-5 spinner justify-content-center'>
          <div className='bounce1'></div>
          <div className='bounce2'></div>
          <div className='bounce3'></div>
        </div>
      </div>
      {/* END LOADING SECTION */}
    </div>
  </div>
</div>
)}