

export const getGifs = async(category) => {

      const url = `https://api.giphy.com/v1/gifs/search?api_key=PoU0Q4qwV4mzPj6OYgNLkfcpXJ1OJnNz&q=${ encodeURI(category) }&limit=10`;
      const respuesta = await fetch(url);
      const {data} = await respuesta.json();


      const gifs = data.map((d)=>{
         return(
            {
               id: d.id,
               title: d.title,
               url: d.images.downsized_medium.url
            }
         )
      })

      return (gifs);

   }