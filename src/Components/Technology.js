import React from 'react'
import BollyPost from './BollyPost'
import BollyTopPost from './BollyTopPost'
import BollyTopPostt from './BollyTopPost2.js'

function Technology() {
    return (
        <>
            <div className='bollymain'>
                {/* <h1>Bollyword</h1> */}
                <div className='bollyleftside'>

                    <h1 className='bollytext'>Technology </h1>
                    <hr className='bollylefthr'></hr>
                    <BollyPost />
                    <BollyPost />
                    <BollyPost />
                    <BollyPost />
                    <BollyPost />
                    <BollyPost />
                    <BollyPost />
                    <span >
                        {/* <img src='../images./arrow.png' alt='arrow'></img> */}
                        <img
                            className="bollywoodarrowimg"
                            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.stickpng.com%2Fimg%2Ficons-logos-emojis%2Farrows%2Fdown-arrow&psig=AOvVaw1ecCK2QNgFr9BRAWwmifyQ&ust=1642428801556000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjkodi6tvUCFQAAAAAdAAAAABAD"
                            alt=""
                        />
                    </span>
                    <button className='bollywoodloadmore'> Loadmore</button>

                </div>
                <div className='bollyrightside'>
                    <h1 className='bollytext2'>Top Posts</h1>
                    <hr className='bollyrighthr'></hr>

                    <BollyTopPost />
                    <BollyTopPostt />
                    <BollyTopPostt />
                    <BollyTopPostt />
                    <div className='bollyadbox'>
                    Advertistement
                    </div>
                </div>


            </div>
            {/* <div className='bollyrightsideadbox'></div> */}
        </>
    )
}

export default Technology
