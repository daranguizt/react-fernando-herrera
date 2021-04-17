import React, { useEffect, useMemo, useState } from "react";
import queryString from "query-string";
import { useLocation } from "react-router";
import { heroes } from "../../data/heroes";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const initialForm = {
    search: q,
  };

  const [{ search }, handleInputChange] = useForm(initialForm);

  const filteredHeroes = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${search}`);
  };

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              value={search}
              placeholder="Find your hero"
              className="form-control"
              autoComplete="off"
              onChange={handleInputChange}
            />

            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === "" && <div className="alert alert-info">Search a hero</div>}

          {q !== "" && filteredHeroes.length === 0 && (
            <div className="alert alert-info">No hero with {q}</div>
          )}

          {filteredHeroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
