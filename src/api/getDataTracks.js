import axios from 'axios';

const getTracks = async (accessToken, searchTerm) => {
  
  const response = await axios.get('https://api.spotify.com/v1/search', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      q: searchTerm,
      type: 'track',
      limit: 10
    },
  });

  return response.data.tracks.items;
};

export default getTracks;