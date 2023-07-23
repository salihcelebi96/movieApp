import React, { useState, useEffect } from 'react';

const APIPage = (props) => {
    const searchValue = props.searchValue;
    const setSearchValue = props.setSearchValue;




    const apiKey = 'eb3054698a69019de3e32533a7e48d69';
    const apiUrl = 'https://api.themoviedb.org/3';
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'; // Adjust the size according to your preference

    const [popularMovies, setPopularMovies] = useState([]);
    

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    const filterItems = (items, searchTerm) => {
        // Eğer searchTerm bir dize değilse, boş bir dizi döndür
        if (typeof searchTerm !== 'string') {
          return [];
        }
      
        return items.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      };
      

    const fetchPopularMovies = async () => {
        try {
            const response = await fetch(
                `${apiUrl}/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`
            );

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
    }, []);

    const filteredItems = filterItems(popularMovies, searchValue);

    return (
        <div className='w-full h-full  '>
            <div className='flex justify-center pt-3'>
                <form className='w-[500px]'>
                    <label
                        htmlFor='default-search'
                        className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
                    >
                        Search
                    </label>
                    <div className='relative'>
                        
                        
                    </div>
                </form>
            </div>
            <div className='grid grid-cols-4 gap-4 mt-5 justify-center  '>
                {filteredItems.map((movie) => (
                    <div
                        className='flex my-10 flex-col  justify-center items-center w-[500px]  group'
                        key={movie.id}
                    >
                        <h1 className='w-80 my-4 flex justify-center'>{movie.title}</h1>
                        <img
                            className='w-80 my-5 transition-transform duration-300 group-hover:scale-110'
                            src={`${imageBaseUrl}${movie.poster_path}`}
                            alt={movie.title}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default APIPage;
