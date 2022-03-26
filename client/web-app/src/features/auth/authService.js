import axios from "axios";

const API_URL = "/api/user/";

// Register User
const registerUser = async (userRegistrationData) => {
  const response = await axios.post(API_URL, userRegistrationData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  registerUser,
};

export default authService;
