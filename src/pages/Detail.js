import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";



const MovieDetail = () => {
  const selectedMovie = useSelector(state => state.overView.selectedMovie);
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
  console.log(selectedMovie)

  return (
    <div className="text-white flex flex-col justify-center items-center mt-5"> 
      {selectedMovie ? (
        <>
        
         <img className='w-96 h-[400px]  my-5' src={`${imageBaseUrl}${selectedMovie.poster_path}`} alt={selectedMovie.title} />
         <div className='w-96 flex flex-col justify-center border rounded-sm p-3 py-10 bg-yellow-700'>
          <p className='my-4 flex justify-center'>{selectedMovie.title}</p>
          <p> {selectedMovie.overview}</p>
         </div>
          
          
        </>
      ) : (
        <p>No movie selected</p>
      )}
      <div className='absolute left-1 top-1'>
        <Link to="/" > Home </Link>
      </div>
    </div>
  );
};

export default MovieDetail;
