import axios from "@utils/axio.instance";
import encryptHelper from "@utils/encrypt.helper";

export default {
  findByUser: (params) => {
    return new Promise((resolve, reject) => {
      params.username = encryptHelper.rsa.encrypt(params.username);

      axios
        .post(`user/findbyuser/`, params)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  },
  validateUser: (params) => {
    return new Promise((resolve, reject) => {
      params.username = encryptHelper.rsa.encrypt(params.username);
      params.password = encryptHelper.rsa.encrypt(params.password);

      axios
        .post(`user/validate/`, params)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  },
  registerUser: (params) => {
    return new Promise((resolve, reject) => {
      params.username = encryptHelper.rsa.encrypt(params.username);
      params.password = encryptHelper.rsa.encrypt(params.password);

      axios
        .post(`user/register/`, params)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  },
  verified_2fa: (params) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`user/secure_2fa/validate/`, params)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  },
  getToken_2fa: (params) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`user/secure_2fa/gettoken/` + params.id)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  },
  refreshToken: (params) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`user/refreshtoken/`, params)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  },
};
