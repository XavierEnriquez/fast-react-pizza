import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

/* createAsyncThunk is a Redux Toolkit function to run async functions. In ths case a fetch function, which it sould never be called getAddress since by convention the word get is reserved for Selectors. This createAsyncThunk function creates three additional action types, one for the pending state, one for the fullfiled state and one for the rejected state */
export const fetchAddress = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = ` ${addressObj?.city}, ${addressObj.principalSubdivision} ${addressObj?.postcode}`;

    // 3) Then we return an object with the data that we are interested in. Payload of the fullfilled state
    return { position, address };
  },
);

const initialState = {
  username: "",
  status: "idle",
  position: {},
  address: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  // Here we connect the createAsyncThunk by using another Redux Toolkit function called extraReducers with the three additional actions types, pending, fullfilled, rejected.
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = "error";
        state.error =
          "Error getting your location. Make sure to fill out the address field. ";
      }),
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;

export const getUsername = (state) => state.user.username;
