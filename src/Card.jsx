import React from 'react'


export const Card = ({id, title, tag}) => {
    
  return (
    <div className="container">
        <div className="top">
            <div className="id">
                {id}
            </div>
            <div className="dp">
                <img src="./img/man.png" alt="" className="userImg" />
                <img src="./img/Location_dot_black.svg.png" alt="" className="statusDp" />
            </div>
        </div>
        <div className="titleName">
            {title}
        </div>
        <div className="bottom">
            <div className="priorityPos">
                <img src="./img/check.png" alt="" className="priorityNum"/>
            </div>
            <div className="tags">
                <div className="tag">
                <img src="./img/Location_dot_black.svg.png" alt="" className="tagDot" />
                    {tag}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card