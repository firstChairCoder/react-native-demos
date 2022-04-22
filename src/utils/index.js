// obtained from react native tutorials
import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");
const PIXEL_DENSITY = PixelRatio.get();

const Util = {
  ratio: PIXEL_DENSITY,
  pixel: 1 / PIXEL_DENSITY,
  size: {
    width,
    height,
  },
  post(url, data, callback) {
    const fetchOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        callback(responseData);
      });
  },
  key: "BDKHFSDKJFHSDKFHWEFH-REACT-NATIVE",
};

export default Util;
