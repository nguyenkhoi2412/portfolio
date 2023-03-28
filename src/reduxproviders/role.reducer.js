import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import commonServices from "@services/common.api";
import { storedExtension } from "@utils/helpers";
import storageHandler from "@authentication/storageHandler";

export const ROLE_GET_ALL = createAsyncThunk(
  "role/getAll",
  async (params, thunkAPI) => {
    return await commonServices.getbyfilter("role/getAll/", params);
  }
);

// init state role
const initialState = {
  isFetching: false,
  ok: true,
  message: "",
  d: [],
};

export const role = createSlice({
  name: "role",
  initialState: initialState,
  reducers: {},
  extraReducers: {},
});

// export actions to use
export const {} = role.actions;

//#region The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const roleState = (state) => state.role;
//#endregion

export default role.reducer;
