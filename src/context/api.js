import axios from "axios";

export const fetchLogin = async (input) => {
    const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_ENDPOINT}/auth/login`,
        input
    );

    return data;
};

export const fetchLogout = async () => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BASE_ENDPOINT}/auth/logout`,
      {
        refresh_token: localStorage.getItem('refresh-token'),
      }
    );  
    return data;
};