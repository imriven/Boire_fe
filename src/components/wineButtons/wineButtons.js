import React from "react";

export default function WineButtons() {
  function handleTry() {
    console.log("try");
  }
  function handleFavs() {
    console.log("fav");
  }
  return (
    <div>
      <button onClick={() => handleTry()}>Add to Try List</button>
      <button onClick={() => handleFavs()}>Add to Favorites</button>
    </div>
  );
}
