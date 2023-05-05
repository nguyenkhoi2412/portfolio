import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import countryServices from "@services/country";

// ==============================|| ACTIONS ||============================== //
//#region ACTIONS
export const GET_COUNTRIES = createAsyncThunk(
  "country/getAll",
  async (params, thunkAPI) => {
    return await countryServices.getCountries();
  }
);

// ==============================|| REDUX PROVIDER ||============================== //
//#region REDUX PROVIDER
// init state auth
const initialState = {};

export const country = createSlice({
  name: "country",
  initialState: initialState,
  reducers: {},
  extraReducers: {},
});
//#endregion

// export actions to use
export const {} = country.actions;

//#region The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const countryState = (state) => state.country;
//#endregion

export default country.reducer;
