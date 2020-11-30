import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/GetGifs';
import { GifCardItem } from './GifCardItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

   const {data: images, loading} = useFetchGifs(category);


// const [images, setImages] = useState([])

//    useEffect(() => {
      
//       getGifs(category)
//          .then( (imgs) => {
//             setImages(imgs);
//          } )

//    }, [category])


   return (
      <>
         <h3> { category } </h3>

         {loading? <p> Loading</p> : null}

         <div className="card-grid">
               {
                  images.map((img) => {
                     return (
                        <GifCardItem key={img.id} { ...img } />
                     )
                  })
               }
         </div>

      </>
   )
}
   