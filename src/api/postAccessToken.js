import axios from "axios";

const postAccessToken = async (clientId, clientSecret, redirectUri, code) => {
  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      {
        grant_type: "client_credentials",
        code: code,
        redirect_uri: redirectUri,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " + btoa(clientId + ":" + clientSecret).toString("base64"),
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error(error.message);
  }
};

export default postAccessToken;
