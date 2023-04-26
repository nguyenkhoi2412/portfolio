import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import authServices from "@services/auth";
import { storedExtension } from "@utils/helpersExtension";
import storageHandler from "@constants//storageHandler";

export const FIND_BY_USER = createAsyncThunk(
  "auth/findbyuser",
  async (params, thunkAPI) => {
    return await authServices.findByUser(params);
  }
);

export const VALIDATE_USER = createAsyncThunk(
  "auth/validate",
  async (params, thunkAPI) => {
    return await authServices.validateUser(params);
  }
);

export const REGISTER_USER = createAsyncThunk(
  "auth/register",
  async (params, thunkAPI) => {
    return await authServices.registerUser(params);
  }
);

export const VALIDATE_SECURE_2FA = createAsyncThunk(
  "auth/secure_2fa/validate",
  async (params, thunkAPI) => {
    return await authServices.verified_2fa(params);
  }
);

export const SECURE_2FA_GENERATE_TOKEN = createAsyncThunk(
  "auth/secure_2fa/gettoken",
  async (params, thunkAPI) => {
    return await authServices.getToken_2fa(params);
  }
);

const currentUser = () => {
  if (localStorage.getItem(storageHandler.DASHBOARD.CURRENT_USER)) {
    return JSON.parse(
      localStorage.getItem(storageHandler.DASHBOARD.CURRENT_USER)
    );
  }

  return {};
};

// init state auth
const initialState = {
  isFetching: false,
  ok: true,
  message: "",
  currentUser: currentUser(),
  language: "en",
};

export const auth = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    SIGN_OUT: (state) => {
      localStorage.removeItem(storageHandler.DASHBOARD.CURRENT_USER);
      storedExtension.removeCookie(storageHandler.DASHBOARD.ACCESS_TOKEN);
      storedExtension.removeCookie(storageHandler.DASHBOARD.REFRESH_TOKEN);
      storedExtension.removeCookie(storageHandler.DASHBOARD.VERIFIED_2FA);

      return { ...state, ...initialState };
    },
  },
  extraReducers: {
    //#region VALIDATE_USER
    [VALIDATE_USER.pending]: (state) => {
      return {
        ...state,
        isFetching: true,
      };
    },
    [VALIDATE_USER.rejected]: (state) => {
      return {
        ...state,
        isFetching: false,
      };
    },
    [VALIDATE_USER.fulfilled]: (state, action) => {
      const response = action.payload;
      const results = response.rs;

      const newState = {
        ...state,
        isFetching: false,
        ok: response.ok,
        message: response.message,
        currentUser: results.currentUser,
      };

      if (response.ok) {
        // save localStore USER INFOS
        localStorage.setItem(
          storageHandler.DASHBOARD.CURRENT_USER,
          JSON.stringify(results.currentUser)
        );

        // save token to cookie
        storedExtension.setCookie(
          storageHandler.DASHBOARD.VERIFIED_2FA,
          results.verified_token + ""
        );

        storedExtension.setCookie(
          storageHandler.DASHBOARD.ACCESS_TOKEN,
          results.access_token
        );

        // storedExtension.setCookie(
        //   storageHandler.DASHBOARD.REFRESH_TOKEN,
        //   results.refresh_token
        // );
      }

      return newState;
    },
    //#endregion
    //#region VALIDATE_SECURE_2FA
    [VALIDATE_SECURE_2FA.pending]: (state) => {
      return {
        ...state,
        isFetching: true,
      };
    },
    [VALIDATE_SECURE_2FA.rejected]: (state) => {
      return {
        ...state,
        isFetching: false,
      };
    },
    [VALIDATE_SECURE_2FA.fulfilled]: (state, action) => {
      const response = action.payload;
      const results = response.rs;

      if (response.ok) {
        // save token to cookie
        storedExtension.setCookie(
          storageHandler.DASHBOARD.VERIFIED_2FA,
          results.verified_token + ""
        );

        storedExtension.setCookie(
          storageHandler.DASHBOARD.ACCESS_TOKEN,
          results.access_token
        );
      }

      return {
        ...state,
        isFetching: false,
      };
    },
    //#endregion
  },
});

// export actions to use
export const { SIGN_OUT } = auth.actions;

//#region The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const authState = (state) => state.auth;
export const currentUserState = (state) => state.auth.currentUser;
//#endregion

export default auth.reducer;
