import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './component/NavBar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import SeatLayout from './pages/SeatLayout';
import MyBookings from './pages/MyBookings';
import Favourite from './pages/Favourite';
import Footer from './component/Footer';
import { Toaster } from 'react-hot-toast';
// import { Layout } from 'lucide-react';
import Layout from './pages/admin/Layout';
import AddShows from './pages/admin/AddShows';
import ListBookings from './pages/admin/ListBookings';
import ListShows from './pages/admin/ListShows';
import Dashboard from "./pages/admin/Dashboard"; 



const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin');

  return (
    <>
      <Toaster />
      
      {/* Show NavBar only on non-admin routes */}
      {!isAdminRoute && <NavBar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
        <Route path='/movies/:id/:date' element={<SeatLayout />} />
        <Route path='/my-bookings' element={<MyBookings />} />
        <Route path='/favourite' element={<Favourite />} />
        <Route path='/admin/*' element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="add-shows" element={<AddShows/>}/>
          <Route path="list-shows" element={<ListShows/>}/>
          <Route path="list-bookings" element={<ListBookings/>}/>
        </Route>
      </Routes>

      {/* Show Footer only on non-admin routes */}
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
