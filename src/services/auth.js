import axios from "@utils/axio.instance";
import encryptHelper from "@utils/encrypt.helper";
import { objectExtension } from "@utils/helpersExtension";

export default {
  findByUser: (params) => {
    return new Promise((resolve, reject) => {
      params.username = encryptHelper.rsa.encrypt(params.username);

      axios
        .post(`auth/findbyuser/`, params)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  },
  validateUser: (params) => {
    return new Promise((resolve, reject) => {
      params.username = encryptHelper.rsa.encrypt(params.username);
      params.password = encryptHelper.rsa.encrypt(params.password);

      axios
        .get(objectExtension.parseToQueryString("auth/validate/", params))
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  },
  registerUser: (params) => {
    return new Promise((resolve, reject) => {
      params.username = encryptHelper.rsa.encrypt(params.username);
      params.password = encryptHelper.rsa.encrypt(params.password);

      axios
        .post(`auth/register/`, params)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  },
  changePassword: (params) => {
    return new Promise((resolve, reject) => {
      // encrypt data
      params.currentUsername = encryptHelper.rsa.encrypt(
        params.currentUsername
      );
      params.currentPassword = encryptHelper.rsa.encrypt(
        params.currentPassword
      );
      params.usernameResetPassword = encryptHelper.rsa.encrypt(
        params.usernameResetPassword
      );
      params.newPassword = encryptHelper.rsa.encrypt(params.newPassword);
      params.confirmPassword = encryptHelper.rsa.encrypt(
        params.confirmPassword
      );

      axios
        .put(`auth/changepassword/`, params)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  },
  verified_2fa: (params) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`auth/secure_2fa/validate/`, params)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  },
  getToken_2fa: (params) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`auth/secure_2fa/gettoken/` + params.id)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  },
  refreshToken: (params) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`auth/refreshtoken/`, params)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  },
};
