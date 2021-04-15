import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./multipleCustomHooks.css";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter();
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

  const { loading, data } = useFetch(url);
  console.log(counter);

  //const {author, quote} = !!data && data[0]; //trucazo!

  //mi manera de desestructurar
  const author = data && data[0]?.author;
  const quote = data && data[0]?.quote;
  return (
    <div>
      <h1>Multiple Custom Hooks - BreakingBad Quotes</h1>
      <hr />

      {!loading ? (
        <blockquote className="blockquote text-right">
          <p className="mb-0">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      ) : (
        <div className="alert alert-info text-center">Loading...</div>
      )}

      <button className="btn btn-primary" onClick={() => increment(1)}>
        Next quote
      </button>
    </div>
  );
};
