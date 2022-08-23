import React from "react";
import { useEffect } from "react";
import { sendRequest } from "../services/sendRequest";

const PaymentStatus = ({ data }) => {
  return (
    <div>
      <table>
        <tr>
          <th>id</th>
          <th>From (Airport)</th>
          <th>To (Airport)</th>
          <th>From (Country)</th>
          <th>To (Country)</th>
          <th>Total</th>
          <th>Reference ID</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>{data._id}</td>
          <td>{data.from_airport}</td>
          <td>{data.from_country}</td>
          <td>{data.to_country}</td>
          <td>{data.total}</td>
          <td>{data.referenceNum}</td>
          <td>{data.status}</td>
        </tr>
      </table>
    </div>
  );
};

export default PaymentStatus;
