const sendRequest = async (formData) => {
  let response = await fetch("http://localhost:4000/save", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(formData),
  });
  response = response.json();
  console.log(response);
};

export { sendRequest };
