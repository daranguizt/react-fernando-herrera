import React from "react";
import { HeroList } from "../heroes/HeroList";

export const MarvelScreen = () => {
  return (
    <div className="mt-5">
      <HeroList publisher="Marvel Comics" />
    </div>
  );
};
