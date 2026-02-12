// import React, { useEffect, useState } from 'react'
// import { dummyBookingData } from '../../assets/assets';
// import Loading from '../../component/Loading';
// import Title from '../../component/admin/Title';

// const ListBookings = () => {
//   const currency=import.meta.env.VITE_CURRENCY
//   const[shows,setShows]=useState([]);
//   const[loading,setLoading]=useState(true);
//   const getAllBookings=async()=>{
//     ListBookings(dummyBookingData)
//     setLoading(false)
//   };
//   useEffect(()=>{
//     getAllBookings();
//   },[]);
//   return !loading? (
//     <>
//       <Title text1="List" text2="Bookings"/>
//       <div className='max-w-4xl mt-6 overflow-x-auto'>
//         <table className='w-full border-collapse rounded-md overflow-hidden text-nowrap'>
//           <thead>
//             <tr className='bg-primary/20 text-left text-white'>
//               <th className='p-2 font-medium pl-5'>User Name</th>
//               <th className='p-2 font-medium'>Movie Name</th>
//               <th className='p-2 font-medium'>Show Time</th>
//               <th className='p-2 font-medium'>Seats</th>
//               <th className='p-2 font-medium'>Amount</th>
//             </tr>
//           </thead>
//         </table>
//       </div>
//     </>
//   ):<Loading/>
// }

// export default ListBookings

import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../../assets/assets';
import Loading from '../../component/Loading';
import Title from '../../component/admin/Title';

const ListBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllBookings = async () => {
    try {
      setShows(dummyBookingData);   // ✅ Correct
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBookings();
  }, []);

  return !loading ? (
    <>
      <Title text1="List" text2="Bookings" />
      <div className="max-w-4xl mt-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-md overflow-hidden text-nowrap">
          <thead>
            <tr className="bg-primary/20 text-left text-white">
              <th className="p-2 font-medium pl-5">User Name</th>
              <th className="p-2 font-medium">Movie Name</th>
              <th className="p-2 font-medium">Show Time</th>
              <th className="p-2 font-medium">Seats</th>
              <th className="p-2 font-medium">Amount</th>
            </tr>
          </thead>

          <tbody className="text-sm font-light">
            {shows.map((item, index) => (
              <tr key={index}>
                <td className="p-2 pl-5">{item.user?.name || "N/A"}</td>

                <td className="p-2">{item.show?.movie?.title || "N/A"}</td>

                <td className="p-2">
                  {item.show?.showDateTime ? new Date(item.show.showDateTime).toLocaleString() : "N/A"}
                </td>

                <td className="p-2">
                  {Array.isArray(item.bookedSeats)
                    ? item.bookedSeats.join(", ")
                    : "No Seats"}
                </td>

                <td className="p-2">
                  {currency} {item.amount}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default ListBookings;
