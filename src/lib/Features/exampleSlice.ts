import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  example: [],
  status: "idle",
  error: null as string | null | undefined,
};

export const fetchExample = createAsyncThunk(
  "example/fetchExample",
  async () => {
    try {
      const response = await axios.get(
        "https://api.sampleapis.com/wines/reds"
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch data from the API.");
    }
  }
);

const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExample.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchExample.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.example = state.example.concat(action.payload);
      })
      .addCase(fetchExample.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default exampleSlice.reducer;
