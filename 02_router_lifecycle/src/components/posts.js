import React from 'react';
import { Link } from 'react-router-dom'

const Posts = () => {

    // const list = ids.map(item => {
    //     return(
    //         <span key={item.id}>
    //             <Link to={item.id}></Link><br />
    //         </span>
    //     )
    // })

    return [
        <div key='1'>Hello</div>,
        <div key = '2'>i am </div>,
        <div key = '3'> a react app</div>
    ]
}

export default Posts