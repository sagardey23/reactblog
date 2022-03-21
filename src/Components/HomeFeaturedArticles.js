import React, { useContext } from 'react'
import { AllContext } from './AllContext'
import { Link } from 'react-router-dom'
function HomeFeaturedArticles() {
    let first = []
    let second = []
    const [data] = useContext(AllContext)
    data.forEach((props) => {
        // console.log(props)
        let key = props.Id
        switch (key) {
            
            case "1":
                first.push({
                    name: props.Name,
                    img: props.Img,
                    id: props.Id,
                    dpropste: props.Date,
                    detail: props.Details,
                    category:props.Category

                })
                break;
    
            case "2":
                second.push({
                    name: props.Name,
                    img: props.Img,
                    id: props.Id,
                    dpropste: props.Date,
                    detail: props.Details,
                    category:props.Category

                })
                break;

            default:
                break;
        }

    })
    return (




        <div className='homeparent' >
            {first.map((e) =>
                <div  key={e.id}class='homepostfirst' >
                    <Link to={`/PostDetails/${e.id}`}><img   src={e.img} alt="" /></Link>
                    <div>{e.name}</div>
                    <div>
                        {e.category}
                     /
                      {e.date}
                      </div>
                </div>

            )}
            <div className='homepostsecond'>
                {second.map((e) => 
                <div  key={e.id} className=''>
                   <Link to={`/PostDetails/${e.id}`}> <img className='' src= {e.img} alt="" /></Link>
                    <div>{e.name}</div>
                    <div> 
                    {e.category}
                     /
                     {e.date}</div>
                </div>
                )}
            </div>
        </div>

    )
}

export default HomeFeaturedArticles

