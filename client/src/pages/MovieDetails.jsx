// import React, { useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import { dummyDateTimeData, dummyShowsData } from '../assets/assets'
// import { StarIcon } from 'lucide-react'
// import TimeFormat from '../lib/TimeFormat'
// import BlurCircle from '../component/BlurCircle'   

// const MovieDetails = () => {
//   const {id}=useParams()
//   const[show, setShow]=useState(null)
//   const getShow=async()=>{
//     const show=dummyShowsData.find(show=>show._id===id)
//     setShow({
//       movie:show,
//       dateTime:dummyDateTimeData
//     })
//   }
//   useEffect(()=>{
//     getShow()
//   },[id])
//   return show? (
//     <div className='px-6 md:px-16 lg:px-40 pt-30 md:pt-50'>
//        <div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto'>
//         <img src={show.movie.poster.path} alt="" className='max-md:mx-auto rounded-xl h-104 max-w-70 object-cover'/>
//         <div className='relative flex flex-col gap-3'>
//           <BlurCircle top="-100px" left="-100px"/>
//           <p className='text-primary'>ENGLISH</p>
//           <h1 className='text-4xl font-semibold max-w-96 text-balance'>{show.movie.title}</h1>
//           <div className='flex items-center gap-2 text-gray-300'>
//             <StarIcon className='w-5 h-5 text-primary fill-primary'/>
//             {show.movie.vote._average.toFixed(1)} User Rating
//           </div>
//           <p className='text-gray-400 mt-2 text-sm leading-tight max-w-xl'>{show.movie.overview}</p>
//           <p>{TimeFormat(show.movie.runtime)}•{show.movie.genres.map(genre=>genre.name).join(", ")}•{show.movie.release_date.split("-")[0]}</p>

//         </div>
//        </div>
//     </div>
//   ): <div>Loading...</div>
// }

// export default MovieDetails






// 





// import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import { dummyDateTimeData, dummyShowsData } from '../assets/assets'
// import { Heart, PlayCircleIcon, StarIcon } from 'lucide-react'
// import TimeFormat from '../lib/TimeFormat'
// import BlurCircle from '../component/BlurCircle'
// import DateSelect from '../component/DateSelect'
// import MovieCard from '../component/MovieCard'
// import Loading from '../component/Loading'

// const MovieDetails = () => {
//   const navigate = useNavigate()
//   const { id } = useParams()
//   const [show, setShow] = useState(null)   // null → loading, false → not found

//   const getShow = () => {
//     const movie = dummyShowsData.find(item => item._id === id)

//     if (!movie) {
//       setShow(false)     // ❌ movie does NOT exist
//       return
//     }

//     setShow({
//       movie,
//       dateTime: dummyDateTimeData
//     })
//   }

//   useEffect(() => {
//     setShow(null)        // show Loading… when ID changes
//     getShow()
//   }, [id])

//   // ---------------------------
//   // UI STATES
//   // ---------------------------

//   if (show === null) return <Loading/>

//   if (show === false) return (
//     <div className="p-10 text-center text-lg text-red-500">
//       Movie Not Found
//     </div>
//   )

//   // ---------------------------
//   // MAIN UI
//   // ---------------------------

//   return (
//     <div className='px-6 md:px-16 lg:px-40 pt-30 md:pt-50'>
//       <div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto'>

//         {/* POSTER */}
//         <img 
//           src={show.movie.poster_path}
//           alt={show.movie.title}
//           className='max-md:mx-auto rounded-xl h-104 max-w-70 object-cover'
//         />

//         {/* DETAILS */}
//         <div className='relative flex flex-col gap-3'>
//           <BlurCircle top="-100px" left="-100px"/>

//           <p className='text-primary'>ENGLISH</p>

//           <h1 className='text-4xl font-semibold max-w-96 text-balance'>
//             {show.movie.title}
//           </h1>

//           <div className='flex items-center gap-2 text-gray-300'>
//             <StarIcon className='w-5 h-5 text-primary fill-primary' />
//             {show.movie.vote_average.toFixed(1)} User Rating
//           </div>

//           <p className='text-gray-400 mt-2 text-sm leading-tight max-w-xl'>
//             {show.movie.overview}
//           </p>

//           <p>
//             {TimeFormat(show.movie.runtime)} •{" "}
//             {show.movie.genres.map(g => g.name).join(", ")} •{" "}
//             {show.movie.release_date.split("-")[0]}
//           </p>

//           {/* Buttons */}
//           <div className='flex items-center flex-wrap gap-4 mt-4'>
//             <button className='flex items-center gap-2 px-7 py-3 text-sm bg-gray-800 hover:bg-gray-900 transition rounded-md font-medium cursor-pointer active:scale-95'>
//               <PlayCircleIcon className='w-5 h-5'/>
//               Watch Trailer
//             </button>

//             <a
//               href="#dateSelect"
//               className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer active:scale-95'
//             >
//               Buy Tickets
//             </a>

//             <button className='bg-gray-700 p-2.5 rounded-full transition cursor-pointer active:scale-95'>
//               <Heart className='w-5 h-5'/>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* CAST */}
//       <p className='text-lg font-medium mt-20'>Your Favourite Cast</p>

//       <div className='overflow-x-auto no-scrollbar mt-8 pb-4'>
//         <div className='flex items-center gap-4 w-max px-4'>
//           {show.movie.casts.slice(0, 12).map((cast, index) => (
//             <div key={index} className='flex flex-col items-center text-center'>
//               <img
//                 src={cast.profile_path}
//                 alt=""
//                 className='rounded-full h-20 md:h-20 aspect-square object-cover'
//               />
//               <p className='font-medium text-xs mt-3'>{cast.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* DATE SELECT */}
//       <DateSelect dateTime={show.dateTime} id={id} />

//       {/* SUGGESTED MOVIES */}
//       <p className='text-lg font-medium mt-20 mb-8'>You May Also Like</p>

//       <div className='flex flex-wrap max-sm:justify-center gap-8'>
//         {dummyShowsData.slice(0, 4).map((movie, index) => (
//           <MovieCard key={index} movie={movie} />
//         ))}
//       </div>

//       {/* SHOW MORE */}
//       <div className='flex justify-center mt-20'>
//         <button
//           onClick={() => navigate('/movies')}
//           className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer'
//         >
//           Show more
//         </button>
//       </div>
//     </div>
//   )
// }

// export default MovieDetails


import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets'
import { Heart, PlayCircleIcon, StarIcon } from 'lucide-react'
import TimeFormat from '../lib/TimeFormat'
import BlurCircle from '../component/BlurCircle'
import DateSelect from '../component/DateSelect'
import MovieCard from '../component/MovieCard'
import Loading from '../component/Loading'   // ✅ Import Loading.jsx

const MovieDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [show, setShow] = useState(null)   // null → loading, false → not found

const getShow = async () => {
  await new Promise(r => setTimeout(r, 400))  // fake loading

  const movie = dummyShowsData.find(item => item._id === id)

  if (!movie) {
  // Do NOT set anything → keeps Loading forever
  return
}


  setShow({
    movie,
    dateTime: dummyDateTimeData
  })
}


  useEffect(() => {
  setShow(null)     // show Loading first

  setTimeout(() => {
    getShow()
  }, 300)           // delay → allows Loading to animate

}, [id])


  // --------------------------------
  // LOADING & NOT FOUND UI
  // --------------------------------
  if (show === null) return <Loading />    // ✅ mount Loading component

  if (show === false)
    return (
      <div className="p-10 text-center text-lg text-red-500">
        Movie Not Found
      </div>
    )

  // --------------------------------
  // MAIN MOVIE DETAILS UI
  // --------------------------------
  return (
    <div className='px-6 md:px-16 lg:px-40 pt-30 md:pt-50'>
      <div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto'>

        {/* POSTER */}
        <img 
          src={show.movie.poster_path}
          alt={show.movie.title}
          className='max-md:mx-auto rounded-xl h-104 max-w-70 object-cover'
        />

        {/* MOVIE DETAILS */}
        <div className='relative flex flex-col gap-3'>
          <BlurCircle top="-100px" left="-100px"/>

          <p className='text-primary'>ENGLISH</p>

          <h1 className='text-4xl font-semibold max-w-96 text-balance'>
            {show.movie.title}
          </h1>

          <div className='flex items-center gap-2 text-gray-300'>
            <StarIcon className='w-5 h-5 text-primary fill-primary' />
            {show.movie.vote_average.toFixed(1)} User Rating
          </div>

          <p className='text-gray-400 mt-2 text-sm leading-tight max-w-xl'>
            {show.movie.overview}
          </p>

          <p>
            {TimeFormat(show.movie.runtime)} •{" "}
            {show.movie.genres.map(g => g.name).join(", ")} •{" "}
            {show.movie.release_date.split("-")[0]}
          </p>

          {/* ACTION BUTTONS */}
          <div className='flex items-center flex-wrap gap-4 mt-4'>
            <button className='flex items-center gap-2 px-7 py-3 text-sm bg-gray-800 hover:bg-gray-900 transition rounded-md font-medium cursor-pointer active:scale-95'>
              <PlayCircleIcon className='w-5 h-5'/>
              Watch Trailer
            </button>

            <a
              href="#dateSelect"
              className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer active:scale-95'
            >
              Buy Tickets
            </a>

            <button className='bg-gray-700 p-2.5 rounded-full transition cursor-pointer active:scale-95'>
              <Heart className='w-5 h-5'/>
            </button>
          </div>
        </div>
      </div>

      {/* CAST SECTION */}
      <p className='text-lg font-medium mt-20'>Your Favourite Cast</p>

      <div className='overflow-x-auto no-scrollbar mt-8 pb-4'>
        <div className='flex items-center gap-4 w-max px-4'>
          {show.movie.casts.slice(0, 12).map((cast, index) => (
            <div key={index} className='flex flex-col items-center text-center'>
              <img
                src={cast.profile_path}
                alt=""
                className='rounded-full h-20 md:h-20 aspect-square object-cover'
              />
              <p className='font-medium text-xs mt-3'>{cast.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* DATE SELECT */}
      <DateSelect dateTime={show.dateTime} id={id} />

      {/* MOVIES YOU MAY ALSO LIKE */}
      <p className='text-lg font-medium mt-20 mb-8'>You May Also Like</p>

      <div className='flex flex-wrap max-sm:justify-center gap-8'>
        {dummyShowsData.slice(0, 4).map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>

      {/* SHOW MORE BUTTON */}
      <div className='flex justify-center mt-20'>
        <button
          onClick={() => navigate('/movies')}
          className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer'
        >
          Show more
        </button>
      </div>
    </div>
  )
}

export default MovieDetails
