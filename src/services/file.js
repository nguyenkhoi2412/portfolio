import axios from "@utils/axio.instance";
import encryptHelper from "@utils/encrypt.helper";
import { objectExtension } from "@utils/helpersExtension";

export default {
  fileUpload: (params) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`file/upload`, params)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  },
};
