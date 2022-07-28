import React, { useState, useEffect } from "react";
import useQuery from "../hooks/useQuery";
import axios from "axios";
import WineButtons from "../wineButtons/wineButtons";
import jwt_decode from "jwt-decode";

export default function Wine({ token }) {
  let query = useQuery();
  const id= query.get("id")
  const decoded = jwt_decode(token);
  let [selectedWine, setSelectedWine] = useState({});
  let [selectedUserWine, setSelectedUserWine] = useState({});
  useEffect(async () => {
    const result = await axios(
      `http://localhost:3300/api/wine/${id}`
    );

    setSelectedWine(result.data);
  }, [id]);
  useEffect(async () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const result = await axios(
      `http://localhost:3300/api/user/${decoded.id}/wine/${id}`,
      config
    );

    setSelectedUserWine(result.data);
  }, [id]);
  console.log(selectedUserWine)
  console.log(decoded);
  const c= selectedUserWine.favorite ? "red" : "black"
  return (
    <div>
      {selectedWine && (
        <>
          {" "}
          <h1 style={{color:c}}>{selectedWine.name} </h1> <img src={selectedWine.label_image} />
          <h3>
            {selectedUserWine.rating}-{selectedUserWine.notes}{" "}
          </h3>
        </>
      )}
      {token && <WineButtons />}
    </div>
  );
}
