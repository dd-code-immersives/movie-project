import logo from './logo.svg';
import './App.css';
import Table from './components/Table'
import MovieForm from './components/MovieForm';
import SearchBar from './components/SearchBar';
import { useEffect, useState } from 'react';


const DATA_URL = "https://raw.githubusercontent.com/dd-code-immersives/movie-project/main/react-intro-form/data/movies.json"


function App() {

	//we make a hook for movies into the state
  // because we are in a function
  const [movies, setMovies] = useState();

// use effect is equivalent to "Component did Mount" runs
// after a  component has been rendered.
// component first renders when it's created
// also renders when a change happens to it 
  useEffect(() => {

	//asyncronously request data 
	// wait for promise to resolve
	// const moviesData = []
	fetch(DATA_URL)
	.then((result) => result.json())
	.then((result) => {
		setMovies(result);
	});

  }, [])
  // when we pass [] to useEffect -> it only runs once in the beginning
  // we can subscript multiple fields for it to run on 	


  const addMovie = (movie) => {
     setMovies([...movies, movie]);
  }

  const removeMovie = (toDelIdx) => {
    const filteredMovies = movies.filter((_, index) => {
       return index !== toDelIdx
    })
    setMovies(filteredMovies)
  }


  const filterMovies = (input, field) => {

	// //show all films if there is no query 
	// if (searchField.trim().length === 0) {
	// 	setMovies(moviesData);
	// 	return;
	// }

	 const moviesFiltered = movies.filter((movie) => {
		   return movie[field].toLowerCase().includes(input.toLowerCase())
	 })

	 setMovies(moviesFiltered)
  } 
  
  

  return (
 <div className="App">
  <SearchBar	
	filterMovies={filterMovies}
  />
  <Table 
     movies={movies || []}
     removeMovie={removeMovie}
	
  />
  <MovieForm 
    addMovie={addMovie}
  />
</div>
  );
}


// 


/// example code of subscribing changes to props 
// function ThreeCounts() {
// 	const [count1, setCount1] = useState(0);
// 	const [count2, setCount2] = useState(0);
// 	const [count3, setCount3] = useState(0);
  
// 	useEffect(() => {
// 	  console.log("changed!");
// 	}, [count1]);
  
// 	return (
// 	  <div>
// 		{count1} {count2} {count3}
// 		<br />
// 		<button onClick={() => setCount1(count1 + 1)}>Increment count1</button>
// 		<button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
// 		<button onClick={() => setCount3(count3 + 1)}>Increment count3</button>
// 	  </div>
// 	);
//   }
  
  


export default App;
