import React, { useState } from 'react'

const App = () => {

  const appkey = "cc8766d87f7b45cca10204403230412"

 const [weather, setWeather] = useState();
 const [searchInput, setSearchInput] = useState();

    const weatherData =()=> {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${appkey}&q=${searchInput}`)
    .then(response => response.json())
       
    .then(data => setWeather(data))
}

 const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};


  return (
    <div>
      {/* Search bar */}
      <div className="grid justify-center py-10 navbar bg-base-100">
  <div className="flex-none gap-2">
    <div className="form-control justify-center">
      <input type="text" placeholder="Search" value={searchInput} onChange={handleChange} className="input input-bordered border-cyan-700 w-24 md:w-auto" />
    </div>
    <button onClick={weatherData} className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
  
</div>

    {/* Weather Body */}

      <div className='grid justify-center'>

      <div className="flex flex-col items-center p-8 rounded-md w-full h-80 bg-cyan-700 dark:text-gray-100">
      <div className="flex justify-between space-x-8">
		<div className="flex flex-col items-center">
    <div className="avatar">
  <div className="w-24 rounded">
    <img src={weather?.current.condition.icon} alt='weather'/>
  </div>
</div>
			<h1 className="text-xl font-semibold">{weather?.location.name}</h1>
		</div>
		<span className="font-bold text-8xl">{weather?.current.temp_c}&deg;C</span>
	</div>
	<div className="mb-2 text-3xl font-semibold py-6">
    Feels like {weather?.current.feelslike_c}&deg;C
    <p className="text-center text-xl dark:text-gray-400">{weather?.current.condition.text}</p>
	</div>

    <p className='mb-2 text-center text-2xl'>{weather?.location.country}</p>

</div>

      </div>

    </div>
  )
}

export default App
