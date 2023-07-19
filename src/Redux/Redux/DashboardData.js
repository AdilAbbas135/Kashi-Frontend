import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const DashboardData = createSlice({
  name: "DashboardData",
  initialState: {
    loading: true,
    Details: null,
    isProfileFetched: false,
    error: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    // STUDENT PROFILE BUILDERS
    builder.addCase(FetchProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(FetchProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.Details = action.payload.Profile;
      state.isProfileFetched = true;
    });
    builder.addCase(FetchProfile.rejected, (state, action) => {
      console.log(action);
      state.error = true;
      state.errorMessage = action.error.message;
    });
  },
});

export const FetchProfile = createAsyncThunk("Fetch/FetchProfile", async () => {
  const token = localStorage.getItem("token");
  const result = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/account/find-profile`,
    {},
    { headers: { token: token } }
  );
  const data = await result.data;
  return data;
});
export default DashboardData.reducer;
