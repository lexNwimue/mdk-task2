import React from "react";
// import "../assets/js/script.js";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="row mt-5">
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={"col-lg-6 text-center "}
        style={{ width: "100vw" }}
      >
        <div className="autocomplete">
          <input
            id="myInput"
            type="text"
            name="myCountry"
            placeholder="Select Airport"
            style={{ width: "500px" }}
          />
        </div>
        <input type="submit" />
      </form>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={"col-lg-6 text-center "}
        style={{ width: "100vw" }}
      >
        <div className="autocomplete">
          <input
            id="airportInput"
            type="text"
            name="myCountry"
            placeholder="Select Airport"
            style={{ width: "500px" }}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
