import { navigate } from "@/service/redirect";
import { axiosInstance } from "@/shared/api/instances";
import { IUser } from "@/shared/api/user";
import { AuthorizationStatus } from "@/shared/types/enums";
import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const getModelFromLocalStorage = (model: string) => {
  if (typeof localStorage === 'undefined') {
    return null
  }

  const storageEntity = localStorage.getItem(model)
  
  return storageEntity ? storageEntity as any : null
}

const extraActions = createExtraActions()
const initialState: {
  currentUser: IUser | null,
  authStatus: AuthorizationStatus,
} = {
  currentUser: getModelFromLocalStorage('currentUser'),
  authStatus: AuthorizationStatus.Unknown
}

const slice = createSlice({
  name: 'user',
  initialState, 
  reducers: createReducers(),
  extraReducers: createExtraReducers
})

export const userActions = { ...slice.actions, ...extraActions};
export const userReducer = slice.reducer

function createExtraReducers(builder: ActionReducerMapBuilder<typeof initialState>) {
  // login
  builder.addCase(extraActions.login.fulfilled, (state, action) => {
    const {token} = action.payload;

    if (token) {
      localStorage.setItem('token', token);
      state.authStatus = AuthorizationStatus.Auth
      window.location.href = '/'
    } else {
      state.authStatus = AuthorizationStatus.NoAuth
      window.location.href = '/sign-in'
    }
  }),
  builder.addCase(extraActions.login.rejected, (state, action) => {
    state.authStatus = AuthorizationStatus.NoAuth
    // TODO типы для ошибок, вытащить саму ошибку с бэка
    // @ts-ignore
    toast.error('Какая-то ошибка, не получилось вытащить')
  })
  // logout
  builder.addCase(extraActions.logout.fulfilled, (state, action) => {
    localStorage.removeItem('token');
    state.authStatus = AuthorizationStatus.NoAuth
    state.currentUser = null
    window.location.href = '/sign-in'
  })
  // register
  builder.addCase(extraActions.register.fulfilled, (state, action) => {
    state.authStatus = AuthorizationStatus.AuthNoVerification
  })
  // currentUser
  builder.addCase(extraActions.currentUser.fulfilled, (state, action) => {
    const currentUser = action.payload
    state.authStatus = currentUser.isAccess ? AuthorizationStatus.Auth : AuthorizationStatus.AuthNoVerification
    state.currentUser = currentUser
  })
  builder.addCase(extraActions.currentUser.rejected, (state, action) => {
    state.authStatus = AuthorizationStatus.NoAuth
    state.currentUser = null
  })
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
      async (data: {email: string, password: string}) => (await axiosInstance.post<{token: string}>('/auth/login', data)).data
    ),
    logout: createAsyncThunk(
      `/logout`,
      async () => (await axiosInstance.post<null>(`/auth/logout`)).data
    ),
    register: createAsyncThunk(
      `/register`,
      async () => (await axiosInstance.post<{token: 'string'}>(`/auth/register`)).data
    ),
    currentUser: createAsyncThunk(
      `/currentUser`,
      async () => (await axiosInstance.get<IUser>(`/currentUser`)).data
    )
  };
}