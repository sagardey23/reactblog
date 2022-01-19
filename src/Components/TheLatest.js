import React from 'react'
import LatestPost from './LatestPost'

function TheLatest() {
    return (
        <>
        <div className='thelatesttext'>
            The Latest
            <hr className='thelatesthr'></hr>
        </div>
        <div className='thelatestpostparent'>
            <LatestPost/>
            <LatestPost/>
            <LatestPost/>
        </div>
        </>
    )
}

export default TheLatest
