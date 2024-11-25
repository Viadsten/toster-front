import { configureStore, Middleware, PayloadAction, Reducer } from '@reduxjs/toolkit'
import { userReducer } from './user/user.slice'


// @ts-ignore
const apiMiddleware = (store) => next => action => {

  if (action.type.endsWith('/pending')) {
    const state = store.getState()
    const currentUserToken = state?.user?.currentUser?.token

    const { request } = action.meta; 

    if (request && request.headers && currentUserToken) {
      request.headers = {
        ...request.headers,
        'Authorization': `Bearer ${currentUserToken}`, 
      };
    }
  }

  return next(action);
};

export const makeStore = () => configureStore({
  reducer: {
    user: userReducer
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({}).concat(apiMiddleware)
})


export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
