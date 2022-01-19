// import { useLocation } from "react-router";
// import Header from "./components/header/Header";
// import Posts from "./components/posts/Posts";
// import Sidebar from "./components/sidebar/Sidebar";
import './compoStyling.css';
// import Header from "./Header";
import Posts from "./Posts";
// import Sidebar from "./Sidebar";
// import "./homepage.css";
import HomePost from "./HomePost"
// import HomePost from "./HomePost"
import TheLatest from "./TheLatest";
import LatestArticles from "./LatestArticles";
import LatestStories from "./LatestStories";


export default function Home() {
  // const location = useLocation();
  // console.log(location);
  return (
    <>
    <div className="homeparent" >
      {/* <Header /> */}
      <div className="homepostfirst" >
        <Posts />
      </div>
      <div className="homepostsecond">
        <HomePost />
        <HomePost />

      </div>
      
    </div>
    <TheLatest />
    <LatestArticles/>
    <LatestStories/>
    </>
  );
}