import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import './Postview.css';

function Loop() {

    const [dt, setdt] = useState([])
    function item(element, index) {

        return (
            <div className='div1' key={index} >
                <div className='tophd'>
                    <div className='nmad'>
                        <h1 className='name'>{element.name}</h1>
                        <p className='city'>{element.location}</p>
                    </div>
                    <div className='threedot'>
                        <div className='dot'></div>
                        <div className='dot'></div>
                        <div className='dot'></div>
                    </div>
                </div>
                <div className='mid'>
                    <img className='cityimg' alt="cityimg" src={element.PostImage} ></img>
                </div>
                <div className='bottom'>
                    <div className='ld'>
                        <p className='lk'>{element.likes}</p>
                        <p className='dt'>{element.date}</p>
                    </div>
                    <div className='dsc' ><b>{element.description}</b></div>

                </div>
            </div>
        )

    }

    useEffect(() => {
        Axios.get("http://localhost:3004/user")
            .then(res => {
                console.log("inloop")
                setdt(res.data)
                console.log("dt", dt)
            }).catch(err => {
                console.log(`${err} in data fetching`)
            })
    }, [])
    return (
        <div className='maindiv'>
            {/* console.log("inside return",dt) */}
            {dt.map(item)}

        </div>
    )
}

export default Loop