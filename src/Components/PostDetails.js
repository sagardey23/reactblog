import React from 'react'
import './compoStyling.css';
import PostDetailsPost from './PostDetailsPost';


function PostDetails() {
    return (
        <>
        <div className='postdetailsparent'>
            <p>5 Ways to animate a React app.</p>
            <div className='postdetailsecpdiv'>
                <div >
                    <img className='postdetailsproimg' src='./images/MasGroup21.png' alt='' />
                    </div>
                    <div>
                        <p>Dmitry Nozhenko</p> 
                        <br></br>
                        <p>Jan 28, 2019 · 10 min read</p>
                    </div>
                    <span><i className="sidebarIcon fab fa-facebook-square"></i></span>
                    <span><i className="sidebarIcon fab fa-instagram-square"></i></span>
                    <span><i className="sidebarIcon fab fa-pinterest-square"></i></span>
                    <span><i className="sidebarIcon fab fa-twitter-square"></i></span>
                    
          
          
          
            </div>
            <img  className='postdetailsreaniimg' src='./images/reani.png' alt=''></img>
            <div className='postdetailsparadiv'>
            <p  >Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.<br></br><br></br>
             Let’s talk about them</p>
            </div>
            <img  className='postdetailsrecodeimg' src='./images/recodeimg.png' alt=''  />
            <div className='postdetailsbtn'>
                <span className='postdetailsbtn'><button className='postdetailsbtn2'>React</button></span>
                <span className='postdetailsbtn'><button className='postdetailsbtn2' >JavaScript</button></span>
                <span className='postdetailsbtn'><button className='postdetailsbtn2'>Animation</button></span>
            </div>
            <div>
                <span>
                    <img src='./images/claps.png' alt='' />
                </span>
                <span><p>9.3K claps</p></span>
            </div>
            <div className='postdetailsecpdiv'>
                <div >
                    <img className='postdetailsproimg' src='./images/MasGroup21.png' alt='' />
                    </div>
                    <div>
                        <p>Written By</p>
                        <p>Dmitry Nozhenko</p> 
                        <br></br>
                        <p>Jan 28, 2019 · 10 min read</p>
                    </div>
                   
                    {/* <span>f</span>
                    <span>i</span>
                    <span>t</span>
                    <span>y</span> */}
            </div>
             <hr></hr>
             
        </div>
        <p>More From Siren</p>
        <div className='postdetailslastdiv'>
        
        <PostDetailsPost/>
        <PostDetailsPost/>
        <PostDetailsPost/>


        </div>
        </>
    )
}

export default PostDetails
