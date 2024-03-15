import axios from "axios";

const baseUrl = "https://bookstore.incubation.bridgelabz.com/bookstore_user";
export const getBooks = async () => {
  const response = await axios.get(`${baseUrl}/get/book`);
  console.log(response.data);
};
