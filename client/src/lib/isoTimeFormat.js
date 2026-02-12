// const isoTimeFormat=(dateTime)=>{
//     const date=new Date(dateTime);
//     const localTime=date.toLocaleDateString('en-US',{
//         hour:'2-digit',
//         minute:'2-digit',
//         hour12:true,
//     });
//     return localTime;
// }
// export default isoTimeFormat
const isoTimeFormat = (dateTime) => {
  const date = new Date(dateTime);

  // Returns something like "06:30 AM", "09:00 PM"
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

export default isoTimeFormat;
