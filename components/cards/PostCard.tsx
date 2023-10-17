import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = () => {
return (
<article className='d-flex'>
    <header className='mb-4 rounded-4 shadow-sm bg-white'>
        <div className='d-flex col-12 p-4'>
            <Image src="/head-01.jpg" width={45} height={45} alt='Profile picture' />
            <div className='ms-2 row lh-1 align-items-center'>
                <p className='d-flex fw-semibold'>Marina Valentine
                    <i className="ms-1 me-2 text-primary bi bi-check-circle-fill"></i>
                    <span className='badge text-bg-primary rounded-pill'>Pro Member</span>
                </p>
                <p className='text-secondary'>replied to the topic
                    <span className='fw-semibold'> Welcome to the Cosplayers Group Forum!</span>
                </p> 
                <p className='text-secondary'>in the forum
                    <span className='fw-semibold'> Cosplayers Group Forum</span>
                </p>
                <span className='text-secondary'>1 year ago</span>
            </div>
        </div>
        <div className='d-flex col-12 p-4'>
            <p>Hello Everyone!</p>
        </div>

        <hr className='m-3 border border-1 opacity-50' />


    </header>
</article>
)
}

export default PostCard