import { useState } from "react";
import { handlePayment } from "../services/handlePayment";

const Form = () => {
  const [firstAirport, setFirstAirport] = useState("");
  const [secondAirport, setSecondAirport] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePayment();
    // setFirstAirport(document.getElementById("airport1").value);
    // setSecondAirport(document.getElementById("airport2").value);
  };
  return (
    <div className="row mt-5 mb-5">
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={"col-lg-6 text-center "}
        style={{ width: "100vw" }}
      >
        <div className="autocomplete">
          <input
            id="airport1"
            type="text"
            name="airport1"
            className="form-control basicAutoComplete"
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
            id="airport1"
            type="text"
            name="airport1"
            placeholder="Select Airport"
            style={{ width: "500px" }}
            className="form-control basicAutoComplete"
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
