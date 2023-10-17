import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = () => {
return (
<article className=''>
    {/* Post 01 */}
    <div className='mb-4 rounded-4 shadow-sm bg-white'>
        <div className='d-flex col-12 p-4'>
            <Image src="/head-01.jpg" width={45} height={45} alt='Profile picture' />
            <div className='d-flex ms-2 row lh-1 align-items-center'>
                <p className='gap-5'>
                    <span className='fw-semibold'>Marina Valentine</span>
                    <i className="ms-1 me-2 text-primary bi bi-check-circle-fill"></i>
                    <span className='badge badge-pro rounded-pill me-2'>Pro Member</span>
                    <span className='text-secondary'>replied to the topic</span>
                    <span className='fw-semibold'> Welcome to the Cosplayers Group Forum!</span>
                    <span>in the forum</span>
                    <span className='fw-semibold'> Cosplayers Group Forum</span>
                </p>
                <span className='text-secondary'>1 year ago</span>
            </div>
        </div>
        <div className='d-flex col-12 p-4'>
            <p>Hello Everyone!</p>
        </div>

        <hr className='m-2 border border-1 opacity-50' />

        <div className='d-flex justify-content-between align-items-center p-2'>
            <div className='ms-2  mb-2 p-2'>
                <i className="fs-4 bi bi-emoji-smile-fill"></i>
                <span className='ms-2 fs-semibold'>1</span>
            </div>
            <div className='d-flex gap-4'>
                <p><span>0 </span>Comments</p>
                <p><span>0 </span>Shares</p>
            </div>
        </div>
    </div>
    {/* END POST 01 */}

    {/* POST 02 */}
    <div className='mb-4 rounded-4 shadow-sm bg-white'>
        <div className='d-flex col-12 p-4'>
            <Image src="/head-01.jpg" width={45} height={45} alt='Profile picture' />
            <div className='d-flex ms-2 row lh-1 align-items-center'>
                <p className='gap-5'>
                        <span className='fw-semibold'>Marina Valentine</span>
                        <i className="ms-1 me-2 text-primary bi bi-check-circle-fill"></i>
                        <span className='badge badge-pro rounded-pill me-2'>Pro Member</span>
                        <span className='text-secondary'>posted an update</span>
                    </p>
                    <span className='text-secondary'>2 years ago</span>
            </div>
        </div>
        <div className='col-12 p-4'>
            <Link href='/' className='post-link'>https://www.twitch.tv/blizzard</Link>
            <div className='mt-5 col-12'>    
                <Image src='/1-teaser.jpg' width={632} height={500} alt='Image post' />    
            </div>
        </div>

        <hr className='m-2 border border-1 opacity-50' />

        <div className='d-flex justify-content-between align-items-center p-2'>
            <div className='ms-2  mb-2 p-2'>
                <i className="fs-4 bi bi-emoji-smile-fill"></i>
                <span className='ms-2 fs-semibold'>1</span>
            </div>
            <div className='d-flex gap-4'>
                <p><span>0 </span>Comments</p>
                <p><span>0 </span>Shares</p>
            </div>
        </div>
    </div>
    {/* END POST 02 */}
</article>
)
}

export default PostCard;