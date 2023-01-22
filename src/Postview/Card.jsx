import React from 'react';
import PosTime from './PosTime';
export default function Card(props) {
    let { likes, description, name, date, img, location } = props;
    return (
        <div className='card'>
            <div className="header">
                <div className="card-header">

                    <div className="name">
                        <strong>{ name }</strong>
                    </div>
                    <div className="location ">
                        { location }
                    </div>
                </div>
                <div className="options">
                    ...
                </div>
            </div>
            <div className="img">
                <img src={ img } alt={ name } />
            </div>
            <div className="icons">
                <div className="like">
                    <img src={ require('../images/logos/heart.png') } alt="likes" />
                </div>
                <div className="comment">
                    <img src="https://images.unsplash.com/photo-1673591296410-1220ba8d6c0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80.png"alt="comments" />
                </div>
                <div className="send">
                    <img src={ require('../images/logos/telegram.png') } alt="send" />
                </div>
                <div className="date">
                    { <PosTime date={ date } /> }
                </div>
            </div>
            <div className="likes">
                { likes } likes
            </div>
            <div className="description text-bold">
                <strong>{ description }</strong>
            </div>
        </div>
    )
}