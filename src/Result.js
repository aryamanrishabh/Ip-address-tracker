const Result = ({ ip, city, region, country, time, isp }) => {
  const location = `${city}, ${region}, ${country}`;

  return (
    <div className="container bg-white p-4" id="result">
      <div className="row">
        <div className="border-right col-md-3">
          <h2 className="text-secondary">Ip address</h2>
          <p className="pt-2">{ip ? ip : "-"}</p>
        </div>
        <div className="border-right col-md-3">
          <h2 className="text-secondary">Location</h2>
          <p className="pt-2">{location}</p>
        </div>
        <div className="border-right col-md-3">
          <h2 className="text-secondary">Timezone</h2>
          <p className="pt-2">{`UTC ${time}`}</p>
        </div>
        <div className="col-md-3">
          <h2 className="text-secondary">Isp</h2>
          <p className="pt-2">{isp}</p>
        </div>
      </div>
    </div>
  );
};

export default Result;
