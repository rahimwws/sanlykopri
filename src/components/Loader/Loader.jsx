import React from "react";
import "./Loader.scss";
export const Loader = (props) => {
  return (
    <div className={props.name} id="Loader">
      <div class="newtons-cradle">
        <div class="newtons-cradle__dot"></div>
        <div class="newtons-cradle__dot"></div>
        <div class="newtons-cradle__dot"></div>
        <div class="newtons-cradle__dot"></div>
      </div>
    </div>
  );
};
