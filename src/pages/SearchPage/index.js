import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import { useDebounce } from '../../hooks/useDebounce';
import "./SearchPage.css";

function SearchPage() {
  const navigate = useNavigate();

  const [searchResults, setSearchResults] = useState([]);

  // console.log('useLocation()', useLocation());
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const searchTerm = query.get("q");
  const debouceSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if(debouceSearchTerm) {
      fetchSearchMovie(debouceSearchTerm);
    }
  }, [debouceSearchTerm]); // searchTerm이 변할때마다 함수 돌림
  
  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      )
      console.log(request);
      setSearchResults(request.data.results);
    } catch (error) {
      console.log('error', error);
    }
  }

  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <section className="search-container">
        {searchResults.map((movie) => {
          if(movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageURL = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <div className="movie" key={movie.id}>
                <div className="movie__column-poster" onClick={() => navigate(`/${movie.id}`)}>
                  <img 
                    src={movieImageURL} 
                    alt={movie.title || movie.name}
                    className="movie__poster"
                  />
                </div>
              </div>
            );
          }
        })}
      </section>
    ) : (
      <section className="no-results">
        <div className="no-results__text">
          <p>Your search for "{debouceSearchTerm}" did not have any matches.</p>
          <br />
          <p>Suggestions:</p>
          <ul>
            <li>Try different keywords</li>
          </ul>
        </div>
      </section> 
    )
  }

  return renderSearchResults();
}

export default SearchPage