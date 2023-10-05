import React from 'react';
import Card from '../Card/Card';
import NavBar from '../NavBar/NavBar';
import './Cards.css'

interface CardProps {
    id: number;
    nombre: string;
    ingredientes: number[];
    instrucciones: string;
    foto: string;
  }

interface Datos {
    recetas: CardProps[];
  }


function Cards({ datos }: {datos: Datos}) {

    const recetas = datos.recetas;

    
    return <div className='buttons'>
        <NavBar/>
        <div className='list'>
        {recetas.map((receta) => {
            return (
                <Card
                id = {receta.id}
                nombre = {receta.nombre}
                ingredientes = {receta.ingredientes}
                instrucciones = {receta.instrucciones}
                foto = {receta.foto}
                />
                );
            })}
            </div>
        </div>

}

export default Cards;


