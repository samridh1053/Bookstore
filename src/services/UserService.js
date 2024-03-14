import axios from "axios";

const baseUrl = "https://bookstore.incubation.bridgelabz.com/bookstore_user";
export const signupUser = async (userDetails) => {
  const response = await axios.post(`${baseUrl}/registration`, userDetails);
  console.log(response.data);
};
export const loginUser = async (userDetails) => {
  const response = await axios.post(`${baseUrl}/login`, userDetails);
  console.log(response.data);
};
