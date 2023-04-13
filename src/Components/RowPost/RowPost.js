import React, { useEffect, useState } from 'react'
import  YouTube  from "react-youtube";
import './RowPost.css'
import { imageUrl,API_KEY} from '../../Constants/Constants'
import axios from '../../axios'
function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setUrlId] =useState('')
  useEffect(() => {
    axios.get(props.url).then((Response)=>{
      console.log(Response.data)
      setMovies(Response.data.results)
    }).catch(err=>{
      alert('Network Error')
    })
  }, [])
   const opts = {height: '390',width: '100%',playerVars: {
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(Response=>{
      if(Response.data.results.length!==0){
        setUrlId(Response.data.results[0])
      }else{
        console.log('Trailer Not Available')
      }
    })
  }
  
  return (
    <div className="row">
        <h2>{props.title} </h2>
        <div className="posters">
          {movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster':'poster'}  src={`${imageUrl+obj.backdrop_path}`} alt="poster" />

          )}
            
        </div>
       {urlId && <YouTube opts={opts} videoId={urlId.key}/> }
    </div>
  )
}

export default RowPost