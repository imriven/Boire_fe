import React, { useState, useEffect } from "react";
import useQuery from "../hooks/useQuery";
import axios from "axios"

export default function Wine({token}) {
  let query = useQuery();
  let [selectedWine, setSelectedWine] = useState({});
    useEffect(async () => {
      const result = await axios(
        `http://localhost:3300/api/wine/${query.get("id")}`
      );

      setSelectedWine(result.data);
    });
  return (
    <div>
      {selectedWine && <> <h1>{selectedWine.name} {token} </h1> <img src={selectedWine.label_image} /></>}
    </div>
  );
}
