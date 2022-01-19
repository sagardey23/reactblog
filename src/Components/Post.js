import { Link } from "react-router-dom";
import './compoStyling.css';

export default function Post({img}) {
  return (
    <div className="post">
      {/* <img
        className="postImg"
        src={img}
        alt=""
      /> */}
      <div className="postInfo">
        {/* <div className="postCats">
        </div> */}
        <span className="postTitle">
          <Link to="/post/1" className="link homefstpost">
            Catch waves with an <br></br>
             adventure guide
          </Link>
        </span>
        <hr />
        
      </div>
      {/* <p className="postDesc">
        Gujarat is vastly underrated and it's a mystery to us why the region isn't more well known as a tourist destination. It has s plethora of temples and palaces
      </p> */}
      <span className="postDate homefstpost">Travel/1 hour ago</span>
    </div>
  );
}