import axios from "axios";

const fetchPictures = async (page: number, limit: number) => {
  try {
    const res = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
    );

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default fetchPictures;