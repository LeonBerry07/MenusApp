import React from 'react';
import './Card.css';

// interface CardProps {
//     id: number;
//     nombre: string;
//     ingredientes: number[];
//     instrucciones: string;
//     foto: string;
// }

export default function Card({ id, nombre, ingredientes, instrucciones, foto}) {

    

    return (
        <div className='card'>

            <div className='imgdiv'>
            <img className='imgh' src={foto} alt="" />
            </div>

            <h2>{id}</h2>

            <div className='name'>
            <h2>{nombre}</h2>
            </div>

            <div className='genres'>
            <h2>{instrucciones}</h2>
            <h2>{ingredientes}</h2>
            </div>

        </div>
    );
};