import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Movies from "./movies";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import Customers from "./components/customers";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "./App.css";
import NewMovie from "./components/newMovie";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/new" element={<NewMovie />} />
        <Route path="/movies/:id" element={<MovieForm />} />
        <Route path="/" element={<Navigate replace to="/movies" />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
