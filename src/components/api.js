import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedMovie, clearSelectedMovie } from '../reducers/overViewReducers';



function APIPage(props) {
    const searchValue = props.searchValue;
    const setSearchValue = props.setSearchValue;

    const overView = useSelector(state => state.overView.movieOverview);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [popularMovies, setPopularMovies] = useState([]);
    console.log(isLoggedIn)
    
    

    const handleViewDetail = async (movie) => {
        try {
          const response = await fetch(`${apiUrl}/movie/${movie.id}?api_key=${apiKey}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
    
          // Redux'ta setSelectedMovie action'ını dispatch edin
          dispatch(setSelectedMovie(data));
    
          // Navigate to "/detail" page
          navigate('/detail');
        } catch (error) {
          console.error('Error fetching movie details:', error);
          // Eğer bir hata oluşursa, ilgili action'u dispatch edin ve state'i sıfırlayın
          dispatch(clearSelectedMovie());
        }
      };
      
      
      

    const apiKey = 'eb3054698a69019de3e32533a7e48d69';
    const apiUrl = 'https://api.themoviedb.org/3';
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'; // Adjust the size according to your preference

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    const filterItems = (items, searchTerm) => {
        // Eğer searchTerm bir dize değilse, boş bir dizi döndür
        if (typeof searchTerm !== 'string') {
            return [];
        }

        return items.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
    };

    const fetchPopularMovies = async () => {
        try {
            const response = await fetch(`${apiUrl}/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            // Check if the data contains 'results' before updating the state
            if (data.results && Array.isArray(data.results)) {
                setPopularMovies(data.results);
            } else {
                setPopularMovies([]);
            }
        } catch (error) {
            console.error('Error fetching popular movies:', error);
            setPopularMovies([]);
        }
    };

    useEffect(() => {
        fetchPopularMovies();
    }, [apiKey, apiUrl]);

    const filteredItems = filterItems(popularMovies, searchValue);

    return (
        <div className='w-full h-full '>
            <div className='flex justify-center pt-3'>
                <form className='w-[500px]'>
                    <label
                        htmlFor='default-search'
                        className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
                    >
                        Search
                    </label>
                    <div className='relative' />
                </form>
            </div>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-5 justify-center'>
                {filteredItems.map((movie) => (
                    <div className='flex my-10 flex-col justify-center items-center w-[500px] group' key={movie.id}>
                        <h1 className='w-80 my-4 flex justify-center'>{movie.title}</h1>
                        <div className='relative'>
                            <img
                                className='w-80 my-5 transition-transform duration-300 group-hover:scale-105'
                                src={`${imageBaseUrl}${movie.poster_path}`}
                                alt={movie.title}
                            />
                            {/* Display the movie rating */}
                            <p className='absolute top-5 right-0 bg-red-600 text-white text-md p-1 border rounded-sm'>
                                Rating: {movie.vote_average}
                            </p>
                        </div>
                        <div className='bg-orange-600 px-5 p-1 border rounded-sm hover:bg-orange-500 my-1'>
                        {isLoggedIn ? (
        <Link className='text-white' onClick={() => handleViewDetail(movie)}>
            View Detail
        </Link>
    ) : (
        <span className='text-gray-400'>View Detail</span>
    )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default APIPage;