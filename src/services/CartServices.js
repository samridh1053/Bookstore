import axios from "axios";

const baseUrl = "https://bookstore.incubation.bridgelabz.com/bookstore_user";

const configToken = () => {
  const accessToken = localStorage.getItem("token");
  const header = {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": accessToken,
    },
  };
  return header;
};

export const getCartItem = async () => {
  const response = await axios.get(`${baseUrl}/get_cart_items`, configToken());
  console.log(response.data);
  return response.data;
};

export const addCartItem = async (id) => {
  console.log("started");
  const response = await axios.post(
    `${baseUrl}/add_cart_item/${id}`,

    configToken()
  );
  console.log(response.data);
  //   return response.data;
};
