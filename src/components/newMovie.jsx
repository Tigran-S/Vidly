import React, { useEffect, useState } from "react";
import Joi from "joi-browser";
import Input from "./common/input";
import { validate, handleChange, handleSubmit } from "./common/form";
import { saveMovie } from "./../services/fakeMovieService";
import Select from "./common/select";
import { getGenres } from "./../services/fakeGenreService";
import { useNavigate } from "react-router-dom";

const NewMovie = () => {
  const [login, setLogin] = useState({
    title: "",
    genre: "",
    numberInStock: 0,
    dailyRentalRate: 0,
  });
  const [errors, setErrors] = useState({});
  const [genres, setGenres] = useState([]);
  const schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.number().min(0).max(100).label("Number in Stock"),
    dailyRentalRate: Joi.number().min(0).max(10).label("Rate"),
  };
  const navigate = useNavigate();
  const doSubmit = () => {
    const newMovie = { ...login };
    for (let i = 0; i < genres.length; i++) {
      if (genres[i].name === login.genre) {
        newMovie._id = genres[i]._id;
        newMovie.genre = { _id: genres[i]._id, name: genres[i].name };
      }
    }
    saveMovie(newMovie);
    navigate("/movies");
  };
  useEffect(() => {
    const genres1 = getGenres();
    setGenres(genres1);
  }, []);
  return (
    <div className="form">
      <h1>Movie Form</h1>
      <form
        onSubmit={(e) => handleSubmit(e, setErrors, login, schema, doSubmit)}
      >
        <Input
          name="title"
          value={login.title}
          label="Title"
          handleChange={(e) =>
            handleChange(e, errors, login, setLogin, setErrors, schema)
          }
          error={errors.title}
        />
        <Select
          name="genre"
          value={login.genre}
          label="Genre"
          type="text"
          handleChange={(e) =>
            handleChange(e, errors, login, setLogin, setErrors, schema)
          }
          error={errors.genre}
        />
        <Input
          name="numberInStock"
          value={login.numberInStock}
          label="Number in Stock"
          type="text"
          handleChange={(e) =>
            handleChange(e, errors, login, setLogin, setErrors, schema)
          }
          error={errors.numberInStock}
        />
        <Input
          name="dailyRentalRate"
          value={login.dailyRentalRate}
          label="Rate"
          type="text"
          handleChange={(e) =>
            handleChange(e, errors, login, setLogin, setErrors, schema)
          }
          error={errors.dailyRentalRate}
        />
        <button
          className="btn btn-primary"
          disabled={validate(login, schema)}
          onClick={doSubmit}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default NewMovie;
