import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 10,
  },
  headers: {
    "X-RapidAPI-Key": "1a8f8840f6msh5b89533dd5c1dcap1b4f70jsnb564a91d8c76",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }

export const FetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
