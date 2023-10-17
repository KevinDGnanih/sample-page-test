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
  <div className='container-fluid'>
    {/* HERO */}
    {/* END HERO */}
    <div className='row justify-content-between mt-5'>

      {/* LEFT SIDE COLLUMN */}
      <div className='col-lg-3 col-md-6'>
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
                  <Link className='link-react text-body-secondary link-underline' href="#">{link.profilLink}</Link>
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
              <Image src="/head-01.jpg" width={45} height={45} alt='Quest badge' />
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
      <div className='col-lg-6 col-md-8'>
        <div className='mb-4 rounded-4 shadow-sm bg-white'>
          <div className='d-flex p-5 justify-content-between'>
            <p className='border-title fw-bolder'>All Updates</p>
            <div className='form-group border rounded'>

              <label htmlFor='select01' className='form-label'>Show</label>
              <select id='select01' className='form-select'>
                <option>Newest Posts</option>
                <option>Oldest posts</option>
              </select>

            </div>
          </div>
        </div>
        {/* POST SECTION */}
        <PostCard />
          {/* END POST SECTION */}
      </div>
      {/* END CENTER COLLUMN */}





      {/* RIGHT SIDE COLLUMN */}
      <div className='col-lg-3 col-md-6 '>
        {/* POPULAR GROUPS */}
        <div className='mb-4 rounded-4 shadow-sm bg-white'>
          <div className='p-2'>
            <p className='fw-bolder m-4'>Popular Groups</p>
            {popularGroup.map((link) => (
            <>
              <div className='d-flex p-4 align-items-center'>
                <Image src={link.imgURL} width={55} height={55} alt='profile picture' className='me-2' />
                <div className='col'>
                  <p className='fw-semibold p-0 m-0'>{link.memberName}</p>
                  <Link className='link-react text-body-secondary link-underline' href="#">{link.memberCount}</Link>
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
              <Image className='me-1' src="/head-01.jpg" width={45} height={45} alt='Bagde picture' />
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
    </div>
  </div>
</div>
)
}