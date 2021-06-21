import { useState, useEffect } from "react";
import Result from "./Result";

const Search = () => {
  const [ip, setIp] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [time, setTime] = useState("");
  const [isp, setIsp] = useState("");

  async function requestIp() {
    let res = await fetch(`
      https://geo.ipify.org/api/v1?apiKey=at_fH7cvaifEuFC6foMpIbiJF74IGb3r&ipAddress=${ip}
    `);

    res = await res.json();

    setRegion(res.location.region);
    setCity(res.location.city);
    setCountry(res.location.country);
    setTime(res.location.timezone);
    setIsp(res.isp);
  }

  useEffect(() => {
    requestIp();
  }, []);

  return (
    <div className="container-fluid" id="search">
      <h1 className="text-center pt-4 text-light">IP Address Tracker</h1>
      <form
        className="text-center"
        onSubmit={(e) => {
          e.preventDefault();
          requestIp();
        }}
      >
        <input
          id="ip"
          value={ip}
          placeholder="Search for any IP address or domain"
          onChange={(e) => {
            setIp(e.target.value);
          }}
        />
        <button>
          <i className="fas fa-chevron-right"></i>
        </button>
      </form>
      <Result
        ip={ip}
        city={city}
        region={region}
        country={country}
        time={time}
        isp={isp}
      />
    </div>
  );
};

export default Search;
