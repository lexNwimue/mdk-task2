import PaystackPop from "@paystack/inline-js";

const paystack = new PaystackPop();
paystack.newTransaction({
  key: "pk_domain_xxxxxxxxxx",
  email: "example@email.com",
  amount: 10000,
  onSuccess: (transaction) => {
    alert(`Transaction successfull ${transaction.reference}`);
  },
  onCancel: () => {
    alert(`Cancelled`);
  },
});
