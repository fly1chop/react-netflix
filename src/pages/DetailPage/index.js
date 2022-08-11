import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';


function DetailPage() {
  const {movieId} = useParams(); //movieId 가져오기
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${movieId}`);
      setMovie(request.data);
    }
    fetchData();
  }, [movieId])
  
  console.log('movie', movie);

  if(!movie) return <div>...loading</div>;
  
  return (
    <section>
      <img 
        className='modal__poster-img'
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title || movie.name} 
      />
      <div className="modal__content">
        <p className="modal__details">
          <span className="modal__user_perc">100% for you</span>
          <span>{movie.release_data ? movie.release_data : movie.first_air_date}</span>
        </p>
        <h2 className="modal__title">{movie.title ? movie.title : movie.name}</h2>
        <p className="modal__overview">평점 : {movie.vote_average}</p>
        <p className="modal__overview">{movie.overview}</p>
      </div>
    </section>
  )
}

export default DetailPage