import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import {
  fetchUsers,
  createUser,
  editUser,
  removeUser,
} from "../../api/userApi";


// FETCH USERS
export const getUsers =
  createAsyncThunk(
    "users/getUsers",

    async () => {

      return await fetchUsers();

    }
  );


// ADD USER
export const addNewUser =
  createAsyncThunk(
    "users/addNewUser",

    async (userData) => {

      return await createUser(userData);

    }
  );


// UPDATE USER
export const updateExistingUser =
  createAsyncThunk(
    "users/updateExistingUser",

    async (updatedUser) => {

      return await editUser(
        updatedUser.id,
        updatedUser
      );

    }
  );


// DELETE USER
export const deleteExistingUser =
  createAsyncThunk(
    "users/deleteExistingUser",

    async (id) => {

      await removeUser(id);

      return id;

    }
  );


// SLICE
const userSlice = createSlice({

  name: "users",

  initialState: {

    users: [],

    loading: false,

    error: null,

  },

  reducers: {},

  extraReducers: (builder) => {

    builder

      // FETCH USERS
      .addCase(
        getUsers.pending,
        (state) => {

          state.loading = true;

        }
      )

      .addCase(
        getUsers.fulfilled,
        (state, action) => {

          state.loading = false;

          state.users = action.payload;

        }
      )

      .addCase(
        getUsers.rejected,
        (state) => {

          state.loading = false;

          state.error =
            "Failed to fetch users";

        }
      )

      // ADD USER
      .addCase(
        addNewUser.fulfilled,
        (state, action) => {

          state.users.push(
            action.payload
          );

        }
      )

      // UPDATE USER
      .addCase(
        updateExistingUser.fulfilled,
        (state, action) => {

          state.users =
            state.users.map((user) =>
              user.id === action.payload.id
                ? action.payload
                : user
            );

        }
      )

      // DELETE USER
      .addCase(
        deleteExistingUser.fulfilled,
        (state, action) => {

          state.users =
            state.users.filter(
              (user) =>
                user.id !== action.payload
            );

        }
      );

  },

});

export default userSlice.reducer;