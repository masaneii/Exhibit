import { createSlice } from "@reduxjs/toolkit";

export const collectionSlice = createSlice({
  name: "collection",
  initialState: {
    album: localStorage.getItem("collections")
      ? JSON.parse(localStorage.getItem("collections"))
      : [],
  },

  reducers: {
    createCollection: (state, action) => {
      state.album.push(action.payload);
      localStorage.setItem("collections", JSON.stringify(state.album));
    },

    deleteCollection: (state, action) => {
      state.album = state.album.filter((foto) => foto.id !== action.payload);
      localStorage.setItem("collections", JSON.stringify(state.album));
    },

    updateCollection: (state, action) => {
      state.album.map((foto) => {
        if (foto.id === action.payload.id) {
          foto.name = action.payload.name;
          foto.description = action.payload.description;
          foto.photos = action.payload.photos;
          console.log(foto.name);
        }
        return null;
      });
      localStorage.setItem("collections", JSON.stringify(state.album));
    },
  },
});

export const { createCollection, deleteCollection, updateCollection } =
  collectionSlice.actions;

export default collectionSlice.reducer;
