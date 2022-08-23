import React from "react";

const Condition = ({ temperature, weather, humidity }) => {
  return (
    <div className="App">
      <main role="main">
        <div id="myCarousel" className="carousel" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://wallpaperaccess.com/full/1540016.jpg"
                alt="Weather Forecast "
                width={"100%"}
                height={"600px"}
              />
            </div>
          </div>
        </div>

        <div className="container marketing">
          <div className="row">
            <div className="col-lg-4 text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9pDmE8Z0QOPNFyfahXMkKnE9c7qjGLb0waA&usqp=CAU"
                alt="temperature"
              />

              <h3>{temperature}&#176;C</h3>
              <h6>Temperature</h6>
            </div>
            <div className="col-lg-4 text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkxREAPqVU90GmIAuD51zCaXjEG3w-8OVmXQ&usqp=CAU"
                alt="Weather"
              />

              <h3>{weather}</h3>
              <h6>Weather</h6>
              <p></p>
            </div>
            <div className="col-lg-4 text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvdarT5E79ulW5adUMU-rYGf8LNcqBnGhjrw&usqp=CAU"
                alt="humidity"
              />
              <h3>
                {humidity} g/m<sup>3</sup>
              </h3>
              <h6>Humidity</h6>
              <p></p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Condition;
