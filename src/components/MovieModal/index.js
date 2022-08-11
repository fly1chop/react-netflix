import React from 'react';
import { useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import "./MovieModal.css";

function MovieModal({
  backdrop_path,
  title,
  overview,
  name,
  release_data,
  first_air_date,
  vote_average,
  setModalOpen,
}) {
  const ref = useRef();
  useOnClickOutside(ref, () => {setModalOpen(false)});
  return (
    <div className="presentation">
      <div className="wrapper-modal">
        <div className="modal" ref={ref}>
          <span className="modal-close" onClick={() => setModalOpen(false)}>
            X
          </span>
          <img 
            className="modal__poster-img" 
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt="modal__poster-img" 
          />
          <div className="modal__content">
            <p className="modal__details">
              <span className="modal__user_perc">100% for you</span>
              <span>{release_data ? release_data : first_air_date}</span>
            </p>
            <h2 className="modal__title">{title ? title : name}</h2>
            <p className="modal__overview">평점 : {vote_average}</p>
            <p className="modal__overview">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieModal;