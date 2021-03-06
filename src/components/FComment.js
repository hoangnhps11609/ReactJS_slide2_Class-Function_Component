import React from 'react'
import faker from 'faker'

const FComment = (props) => {
  return (
    <div className='ui container comment'>
        <a href="" className='avatar'>
            <img src={faker.image.avatar()} alt="avatar" />
        </a>
        <div className='content'>
            <a href="" className='author'>
                {props.author}
            </a>
            <div className='metadata'>
                <span className='date'>{props.timeAgo}</span>
            </div>
            <div className='text'>
                {props.content}
            </div>
        </div>
    </div>
  )
}

export default FComment