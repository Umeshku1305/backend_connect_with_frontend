import React, { useState } from "react";
import axios from "axios";
const App =  () => {
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  async function getRes() {
     axios
      .post("http://localhost:8000", {
        username,
        age,
        city,
      })
      .then((e) => {
        console.log(e.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        placeholder="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={() => getRes()}>send</button>
    </div>
  );
};

export default App;
