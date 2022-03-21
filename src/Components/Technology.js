import React, { useContext } from 'react'
import { AllContext } from './AllContext'
import { Link } from 'react-router-dom'


function Technology() {
    const content = []
    const [data] = useContext(AllContext)

    data.forEach((props) => {
        // console.log(props)
        if (props.Category === "technology") {
            content.push({
                id: props.Id,
                name: props.Name,
                date: props.Date,
                img: props.Img,
                about: props.About,
                category: props.Category
            });
        }
    })

    return (
        <>
            <h1 className='bollytext'>Technology </h1>


            <div className='bollyparent1'>
                <div>
                    {content.map((e) =>
                        <div key={e.id} className='bollyparent2' >
                            <div  >
                                <Link to={`/PostDetails/${e.id}`}>
                                    <img className='imagesizing' src={e.img} alt="" />
                                </Link>
                            </div>
                            <div>
                                <h3>{e.name}</h3>
                                <p>{e.about}</p>
                                <h6>{e.date}</h6>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>

    )
}

export default Technology
