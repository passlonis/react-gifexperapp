import React from 'react'

export const GifCardItem = ({ title, url }) => {

   // console.log(title);

   return (
      <div className="card animate__animated animate__fadeInDownBig">
         <img src={ url } alt={ title } />
         <p> { title } </p>
      </div>
   )
}
