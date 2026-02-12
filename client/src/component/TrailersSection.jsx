
// import React, { useState } from "react";
// import { dummyTrailers } from "../assets/assets";

// const Trailers = () => {
//   const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

//   return (
//     <div className="w-full min-h-screen bg-[#0d0d0d] flex flex-col items-center pt-10">

//       {/* Title */}
//       <h1 className="text-white text-2xl font-semibold w-[85%] mb-6">
//         Trailers
//       </h1>

//       {/* Main Video */}
//       <div className="w-[85%] flex justify-center">
//         <iframe
//           width="70%"
//           height="650"
//           src={currentTrailer.videoUrl}
//           title="YouTube Trailer"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//           style={{
//             borderRadius: "14px",
//             overflow: "hidden",
//           }}
//         ></iframe>
//       </div>

//       {/* Trailer Thumbnails List */}
//       <div className="w-[85%] mt-10 grid grid-cols-4 gap-6">
//         {dummyTrailers.map((item, index) => (
//           <div
//             key={index}
//             onClick={() => setCurrentTrailer(item)}
//             className="cursor-pointer hover:scale-105 transition-all duration-200"
//           >
//             <img
//               src={item.image}
//               alt="Trailer Thumbnail"
//               className="w-full h-40 object-cover rounded-lg"
//             />
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default Trailers;
import React, { useState } from "react";
import { dummyTrailers } from "../assets/assets";


const Trailers = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  return (
    <div className="w-full flex flex-col items-center text-white mt-10">

      {/* Main Trailer */}
      <div
        className="flex justify-center"
        style={{ width: "70%" }}    // ⭐ MAIN VIDEO WIDTH CONTROL
      >
        <iframe
          width="100%"              // ⭐ Matches container width exactly
          height="650"              // ⭐ Increased height
          src={currentTrailer.videoUrl.replace("watch?v=", "embed/")}
          title="YouTube Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            borderRadius: "14px",
            overflow: "hidden",
          }}
        ></iframe>
      </div>

      {/* Thumbnails */}
      <div
        className="grid grid-cols-3 gap-6 mt-10"
        style={{ width: "70%" }}    // ⭐ SAME WIDTH AS MAIN TRAILER
      >
        {dummyTrailers.map((t, index) => (
          <div
            key={index}
            onClick={() => setCurrentTrailer(t)}
            className="cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <img
              src={t.image}
              alt="Trailer Thumbnail"
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trailers;
