import client from "./client";

const serverImage = "http://192.168.1.37:9000/api/upload";

const imageUpload = (images) => {
  const data = new FormData();
  images.forEach((image, index) => {
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    });
  });
  return client.post(serverImage, data);
};

const register = (userInfo) => client.post("/Customer/Register", userInfo);

const update = (images, user) => {
  const data = {
    customerId: user.customerId,
    url: images[0].url,
    thumbnailUrl: images[0].thumbnailUrl,
  };
  return client.put("/Customer/Update", data);
};

export default {
  register,
  imageUpload,
  update,
};
