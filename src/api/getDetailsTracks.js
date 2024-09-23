import axios from 'axios';

const getDetailsTracks = async (accessToken, trackId) => {

    const response = await axios.get(`https://api.spotify.com/v1/tracks/${trackId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

  return response.data;
};

export default getDetailsTracks;