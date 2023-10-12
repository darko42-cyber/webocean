import axiosInstance from "./axiosIntance";

export const registerUser = async (userDetails) => {
  try {
    const res = await axiosInstance.post(
      "/auth/register",
      userDetails
    );
    localStorage.setItem("me", JSON.stringify(res.data));
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
