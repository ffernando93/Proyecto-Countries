import React from 'react'
import style from "./cardsContainers.module.css"


const CardContainer = (props) => {
  const {name, image , continents } = props
  return (
    <>
        
          <div className={style.cartas}>
              <img src={image} width="150" height="150" alt={name} />
              <div >
                <h1>{name}</h1>
                <h3>{continents}</h3>
              </div>
          </div>
        
    </>
    
  )
};

export default CardContainer;

