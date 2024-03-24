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

export const addCartItem = async (id, product) => {
  console.log("started");

  const response = await axios.post(
    `${baseUrl}/add_cart_item/${id}`,
    product,

    configToken()
  );
  console.log(response.data);
  //   return response.data;
};

export const updateCartItem = async (id, quantity) => {
  const response = await axios.put(
    `${baseUrl}/cart_item_quantity/${id}`,
    quantity,
    configToken()
  );
  console.log(response.data);
};

export const deleteCartItem = async (id) => {
  const response = await axios.delete(
    `${baseUrl}/remove_cart_item/${id}`,
    configToken()
  );
  console.log(response.data);
};

export const updateAddress = async (obj) => {
  const response = await axios.put(`${baseUrl}/edit_user`, obj, configToken());
  console.log(response.data);
};

export const placeOrder = async (obj) => {
  const response = await axios.post(`${baseUrl}/add/order`, obj, configToken());
  console.log(response.data);
};
