import PaystackPop from "@paystack/inline-js";
import PaymentStatus from "../components/PaymentStatus";
import { sendRequest } from "./sendRequest";

const handlePayment = () => {
  const paystack = new PaystackPop();
  paystack.newTransaction({
    key: "pk_test_320bd1728fea5082ce7fcedba05750ffd5a1977e",
    email: "lex@lex.com",
    amount: 10000,
    onSuccess: async (transaction) => {
      let from_airport = "Dummy";
      let from_country = "Dummy";
      let to_airport = "Dummy";
      let to_country = "Dummy";
      let total = 1200;
      let referenceNum = Math.floor(Math.random * 10000);
      let status = "Dummy";

      const formData = {
        from_airport,
        from_country,
        to_airport,
        to_country,
        total,
        referenceNum,
        status,
      };

      console.log("Form Data", formData);
      console.log("Sending form data");
      let response = await sendRequest(formData);
      response = await response.json();
      <PaymentStatus data={response} />;
    },
    onCancel: () => {
      alert(`Cancelled`);
    },
  });
};
export { handlePayment };
