import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  // Example NMEA sentence
  // const [nmeaSentence, setNmeaSentence] = useState(
  //   "$GPGGA,181908.00,3404.7041778,N,07044.3966270,W,4,13,1.00,495.144,M,29.200,M,0.10,0000*40"
  // );
  const [nmeaSentence, setNmeaSentence] = useState("");
  const [structure, setStructure] = useState({
    time: "",
    latitude: "",
    latitudeHemisphere: "",
    longitude: "",
    longitudeHemisphere: "",
    speed: "",
    timeStamp: "",
  });

  const [updated, setUpdated] = useState(nmeaSentence);

  const handleChange = (event) => {
    setNmeaSentence(event.target.value);
  };

  const handleClick = () => {
    setUpdated(nmeaSentence);
    const fields = nmeaSentence.split(",");
    setStructure({
      time: fields[1],
      latitude: fields[3],
      latitudeHemisphere: fields[4],
      longitude: fields[5],
      longitudeHemisphere: fields[6],
      speed: fields[7],
      // timeStamp: `${time[0]}${time[1]}:${time[2]}${time[3]}:${time[4]}${time[5]}   HH:MM:SS`,
    });
  };

  return (
    <div className="App">
      <p style={{ fontSize: "3rem", marginTop: "-10vh" }}>
        NMEA GPS Data Encoder
      </p>

      <div class="input-group mb-3" style={{ width: "60vw" }}>
        <input
          type="text"
          class="form-control"
          placeholder="Enter NMEA data here ............"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={handleChange}
          value={nmeaSentence}
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handleClick}
          style={{ width: "10vw", color:'#f1e20d' }}
        >
          SUBMIT
        </button>
      </div>
      <div className="text_P">
        <p>
          Time -{" "}
          {structure.time
            ? `${structure.time[0]}${structure.time[1]}:${structure.time[2]}${structure.time[3]}:${structure.time[4]}${structure.time[5]}  HH:MM:SS`
            : " "}
        </p>
        <p>Latitude - {structure.latitude}</p>
        <p>Latitude Hemishphere - {structure.latitudeHemisphere}</p>
        <p>Longitude - {structure.longitude}</p>
        <p>Longitude Hemishphere - {structure.longitudeHemisphere}</p>
        <p>Speed - {structure.speed}</p>
      </div>
    </div>
  );
}

export default App;