import { Link } from "react-router-dom";
import './compoStyling.css';



function BollyPost() {
    return (
        <div >
            <div className="bollyparent">
              <div className="blfc21">
      <img
        className="bollypostImg2"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      </div>
      <div className="blsc22">
      <div className="postInfo">
        <span className="postTitle">
          <Link to="/post/1" className="link posttext1">
            Catch waves with an
            <br></br> adventure guide
          </Link>
        </span>
        <hr />
        
      </div>
      {/* <p className="postDesc">
        Gujarat is vastly underrated and it's a mystery to us why the region isn't more well known as a tourist destination. It has s plethora of temples and palaces
      </p> */}
      <span className="postDate">Travel/1 hour ago</span>
    </div>
    </div>
    {/* <div className="blsc23">
      1
    </div> */}
    <hr className="hrsize"></hr>
  {/* ); */}
        </div>
    )
}

export default BollyPost
