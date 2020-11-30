import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

   const [categorias, setCategoria] = useState(['Samurai Rx' ]);
   
   const agregarCategoria = (cat="") => {
      setCategoria([cat ,...categorias]);
      // setCategoria((cate)=>{
      //    return [...cate, 'Lithium'];
      // })
   }

   return (
      <div>
         <>
            <h2>GifExpertApp</h2>

            <AddCategory agregarCategoria = { agregarCategoria } />
            <hr/>

            <button > Agregar Elemento</button>
            <ol>
               {
                  categorias.map((categoria) => {

                     return  <GifGrid 
                                    key={categoria}  
                                    category= { categoria } 
                              />
                  })
               }
            </ol>
         </>
      </div>
   )
}

