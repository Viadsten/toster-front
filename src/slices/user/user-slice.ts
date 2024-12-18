import { axiosInstance } from "@/shared/api/axios-instance";
import { AuthorizationStatus } from "@/shared/types/enums";
import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { IUser, NameSpace } from "./types";

export const getModelFromLocalStorage = (model: string) => {
  if (typeof localStorage === "undefined") {
    return null;
  }

  const storageEntity = localStorage.getItem(model);

  return storageEntity ? (storageEntity as any) : null;
};

const extraActions = createExtraActions();
const initialState: {
  currentUser: IUser | null;
  authStatus: AuthorizationStatus;
} = {
  currentUser: getModelFromLocalStorage("currentUser"),
  authStatus: AuthorizationStatus.Unknown,
};

const slice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: createReducers(),
  extraReducers: createExtraReducers,
});

export const userActions = { ...slice.actions, ...extraActions };
export const userReducer = slice.reducer;

function createExtraReducers(
  builder: ActionReducerMapBuilder<typeof initialState>,
) {
  // login
  builder.addCase(extraActions.login.fulfilled, (state, action) => {
    const { token } = action.payload;

    if (token) {
      console.log(action.payload);
      const user = { name: "Гога", email: "goga@kpyt.dick", hasAccess: true };
      localStorage.setItem("currentUser", JSON.stringify(user));
      localStorage.setItem("token", token);
      state.currentUser = user;
      state.authStatus = AuthorizationStatus.Auth;
    } else {
      state.currentUser = null;
      state.authStatus = AuthorizationStatus.NoAuth;
    }
  }),
    builder.addCase(extraActions.login.rejected, (state, action) => {
      state.authStatus = AuthorizationStatus.NoAuth;
      toast.error("Какая-то ошибка, не получилось вытащить");
    });
  // logout
  builder.addCase(extraActions.logout.fulfilled, (state, action) => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    state.authStatus = AuthorizationStatus.NoAuth;
    state.currentUser = null;
  });
  // register
  builder.addCase(extraActions.register.fulfilled, (state, action) => {
    const token = action.payload.token;
    if (action.payload.token) {
      state.authStatus = AuthorizationStatus.AuthNoVerification;
      toast.success(
        "Регистрация прошла успешно, но бек ещё не готов. Поэтому логинься сам лох",
      );
      // localStorage.setItem("currentUser", JSON.stringify(user));
      // localStorage.setItem("token", token);
      // state.currentUser = user;
      // state.authStatus = AuthorizationStatus.Auth;
    } else {
      state.currentUser = null;
      state.authStatus = AuthorizationStatus.NoAuth;
    }
  });
  // currentUser
  builder.addCase(extraActions.currentUser.fulfilled, (state, action) => {
    const currentUser = action.payload;
    state.authStatus = currentUser.hasAccess
      ? AuthorizationStatus.Auth
      : AuthorizationStatus.AuthNoVerification;
    state.currentUser = currentUser;
  });
  builder.addCase(extraActions.currentUser.rejected, (state, action) => {
    state.authStatus = AuthorizationStatus.NoAuth;
    state.currentUser = null;
  });
}

function createReducers() {
  return {
    // confirmEmail
  };
}

function createExtraActions() {
  return {
    login: createAsyncThunk(
      `/login`,
      async (data: { email: string; password: string }) =>
        (await axiosInstance.post<{ token: string }>("/auth/login", data)).data,
    ),
    logout: createAsyncThunk(
      `/logout`,
      async () => (await axiosInstance.post<null>(`/auth/logout`)).data,
    ),
    register: createAsyncThunk(
      `/register`,
      async (data: { email: string; password: string; name: string }) =>
        (await axiosInstance.post<{ token: "string" }>(`/auth/register`, data))
          .data,
    ),
    currentUser: createAsyncThunk(
      `/currentUser`,
      async () => (await axiosInstance.get<IUser>(`/currentUser`)).data,
    ),
  };
}
