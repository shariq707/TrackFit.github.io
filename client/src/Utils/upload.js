

import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "justFit");

  try {
    const uploadUrl = "https://api.cloudinary.com/v1_1/ddtpmixza/image/upload";
    const res = await axios.post(uploadUrl, data);

    if (!res.data || !res.data.url) {
      throw new Error("Invalid response from upload service");
    }

    console.log("Image upload successful:", res.data.url);
    return res.data.url;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export default upload;
