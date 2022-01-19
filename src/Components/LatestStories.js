import React from 'react'
// import LatestPost from './LatestPost'
import LatestStoriesPost from './LatestStoriesPost'

function LatestStories() {
    return (
        <>
            <div className='thelatesttext'>
                The Latest
                <hr className='thelatesthr'></hr>
            </div>
            <div className='thelatestpostparent'>
                <LatestStoriesPost />
                <LatestStoriesPost />
                <LatestStoriesPost />
            </div>
            <button className='bollywoodloadmore'> Loadmore</button>
            <span >
                <img
                    className="bollywoodarrowimg"
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.stickpng.com%2Fimg%2Ficons-logos-emojis%2Farrows%2Fdown-arrow&psig=AOvVaw1ecCK2QNgFr9BRAWwmifyQ&ust=1642428801556000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjkodi6tvUCFQAAAAAdAAAAABAD"
                    alt=""
                />
            </span>
            
        </>
    )
}

export default LatestStories
