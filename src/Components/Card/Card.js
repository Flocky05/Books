import React from 'react';
import './Card.css';
const Card = (props) => {
    const { book } = props;
    const { id, title, time, image } = book;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <img className='w-full h-44 rounded-xl' src={image} alt="Shoes" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <p>Time required : {time} min</p>
                    <div className="card-actions ">
                        <button className="btn btn-primary w-full">Add to list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;